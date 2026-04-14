# ckeditor-repro

A minimal Vue 2 application crafted to reproduce a bug where the CKEditor Revision History panel fails to populate and the editor disappears/greys out upon opening.

## Important: Update License Key
Before running this application, you must insert a valid CKEditor commercial/trial license key.

To update the license key:
1. Open `src/components/Collaboration.vue`.
2. Locate the `getEditorConfig()` method.
3. Replace the placeholder `'licence-key'` with a valid key: `licenseKey: 'YOUR_VALID_KEY'`.

## Project setup
```
npm install
```

### Run for development
```
npm run serve
```

### Steps to Reproduce the Bug
1. Start the application using `npm run serve`.
2. Open the local link (e.g. `http://localhost:8080` or `http://localhost:8082`) in your browser.
3. Wait a moment for the editor to render the placeholder text.
4. Click the **Revision History** toolbar button.
5. Click **Open revision history**.
6. The editor will vanish/grey out and the revision sidebar does not populate
### Context
This minimal repository simulates the exact `addRevisionData()` initialization logic and mocked data fetching constraints from our main Vuex-backed application.
