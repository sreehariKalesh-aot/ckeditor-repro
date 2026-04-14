export default function getRevisionHistoryAdapter(fetchRevisionsCallback, fetchUnsavedRevisionCallback) {
    return class RevisionHistoryAdapter {
        constructor(editor) {
            this.editor = editor;
        }

        async init() {
            if (!this.editor.plugins.has('RevisionHistory')) {
                return;
            }
            const revisionHistoryPlugin = this.editor.plugins.get('RevisionHistory');

            revisionHistoryPlugin.adapter = {
                getRevision: async ({ revisionId, channelId }) => {
                    return Promise.resolve({
                        id: revisionId,
                        createdAt: new Date(),
                        data: '<p>Some older content</p>',
                        creatorId: 'user-id',
                        name: 'Initial version',
                        attributes: {}
                    });
                },
                updateRevisions: (revisionsData, channelId) => {
                    return Promise.resolve(revisionsData.map(r => ({
                        id: r.id,
                        createdAt: r.createdAt || new Date()
                    })));
                }
            };

            if (typeof fetchRevisionsCallback === 'function') {
                const revisions = await fetchRevisionsCallback();
                if (revisions && revisions.length > 0) {
                    revisions.forEach((revision) => {
                        try {
                            revisionHistoryPlugin.addRevisionData(revision);
                        } catch (e) {
                            // ignore
                        }
                    });
                }
            }

            if (typeof fetchUnsavedRevisionCallback === 'function') {
                const unsavedRevision = await fetchUnsavedRevisionCallback();
                if (unsavedRevision) {
                    try {
                        const formattedUnsaved = { ...unsavedRevision };
                        formattedUnsaved.creatorId = null;
                        formattedUnsaved.name = null;
                        revisionHistoryPlugin.addRevisionData(formattedUnsaved);
                    } catch (e) {}
                }
            }
        }
    }
}
