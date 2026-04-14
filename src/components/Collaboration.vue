<template>
  <div id="editor-container" class="editor-container">
      <div id="ck-editor-container">
          <div v-if="!loading" class="preview">
              <ckeditor
                  :editor="editor"
                  v-model="editorData"
                  :config="getEditorConfig()"
              />
          </div>
          <div v-else>Loading editor...</div>
      </div>

      <div id="revision-viewer-container" class="revision-viewer-container">
          <div id="revision-viewer-editor" class="revision-viewer-editor"></div>
          <div id="revision-viewer-sidebar" class="revision-viewer-sidebar"></div>
      </div>
  </div>
</template>

<script>
// Load the custom build locally from ckeditor5-v3
import Editor from '../../ckeditor5-v3/build/ckeditor.js';
import getRevisionHistoryAdapter from './RevisionHistoryAdapter.js';

class MockUsersIntegration {
    constructor(editor) {
        this.editor = editor;
    }
    init() {
        const usersPlugin = this.editor.plugins.get('Users');
        if (usersPlugin) {
            usersPlugin.addUser({
                id: 'mock-user-1',
                name: 'Mock User'
            });
            usersPlugin.defineMe('mock-user-1');
        }
    }
}

export default {
  name: 'Collaboration',

  data() {
      return {
          editor: Editor,
          editorData: '<p>Edit this content to create unsaved revisions.</p>',
          loading: true,
          agreementData: {
              id: 'agreement-123'
          },
          mockRevisions: [
              {
                  id: 'rev-1',
                  createdAt: new Date(Date.now() - 100000),
                  creatorId: 'mock-user-1',
                  name: 'Initial version',
                  data: '<p>Initial content</p>',
                  attributes: {}
              }
          ]
      };
  },
  mounted() {
      // Simulate data fetch delay
      setTimeout(() => {
          this.loading = false;
      }, 500);
  },
  methods: {
      getEditorConfig() {
          return {
              licenseKey: 'licence-key',
              toolbar: [
                  'bold', 'italic', '|', 'revisionHistory'
              ],
              extraPlugins: [
                  MockUsersIntegration,
                  getRevisionHistoryAdapter(
                      () => Promise.resolve(this.mockRevisions),
                      () => null // the unsaved revision mock is left out since user said unsaved diff is fixed
                  )
              ],
              revisionHistory: {
                  editorContainer: document.querySelector('#ck-editor-container'),
                  viewerContainer: document.querySelector('#revision-viewer-container'),
                  viewerEditorElement: document.querySelector('#revision-viewer-editor'),
                  viewerSidebarContainer: document.querySelector('#revision-viewer-sidebar'),
                  resumeUnsavedRevision: true,
                  viewerEditorConfig: {
                  }
              },
              collaboration: {
                  channelId: this.agreementData.id,
              }
          };
      }
  }
}
</script>

<style scoped>
.editor-container {
  display: flex;
  flex-direction: column;
}
.revision-viewer-container {
  display: none;
}
.revision-viewer-sidebar {
  width: 250px;
  background: #f4f4f4;
  border-left: 1px solid #ddd;
}
</style>
