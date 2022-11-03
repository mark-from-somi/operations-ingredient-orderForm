# somi-gas-template

Start Template for Developing in Google Apps Scripts for SOMISOMI Internal tooling

# Google Apps Script Development

The Google Apps Script Starter kit supports the new **V8 JavaScript runtime** that powers Chrome and Node.js. You can write code using modern ECMAScript syntax like Arrow functions, Classes, Template Literals, Destructuring and more.

Google Apps Script Development for SOMISOMI with ES6

You can build Google Workspace add-ons (for Google Docs, Slides, Gmail and Google Sheets), web applications and workflow automation routines with next-generation JavaScript.

### :package: Getting Started

**1.** Clone the repository and install npm dependencies and [utilities](TOOLS.md).

```
git clone https://github.com/mark-from-somi/somi-gas-template.git my-project
cd my-project
npm install
```

Update: The `git clone` command adds a .git folder to your folder that pertains to the Apps Script Starter project and not your local project. You should either re-init the repository or use `degit` to clone the repository.

```
npx degit mark-from-somi/somi-gas-template.git my-project
```

**2.** Log in to Google clasp and authorize using your Google account. (First Time Setup)

```
npx clasp login
```

**3.** Include the necessary [OAuth Scopes](./scopes.md) in the [appsscript.json](./dist/appsscript.json) file

**4.** Create a new Google Script File (bound to a Google App or standalone)

```
npx clasp create --type standalone --title "My Apps Script Project" --rootDir ./dist
```

**5.** Deploy the project

```
npm run deploy
```

The `dist` directory contains the bundled code that is pushed to Google Apps Script.

#### Enable JavaScript v8 Runtime

Inside the Google Apps Script editor, select View > Show project manifest to open the `appsscript.json` manifest file in the editor. Add a new `runtimeVersion` field and set the value to `V8`. Save your script.

## :beginner: Using Git with Google Apps Script

Create a new repository in Github and make a note of the URL of the new repository. Next, open the terminal and run the above commands to push your Apps Script project to Github.

## Testing your Google Apps Script code

You can run tests with jest using

```
npm run test
```

This has limitations:

- You _can_ test code that has no dependencies to Google App Script code, e.g.

```
const hasCpuTime = () => !(Date.now() - START_TIME > ONE_MINUTE * 4);

```

- You _can not_ test code that has dependencies to Google App Script code, e.g.

```
function notTestable() {
    Logger.log("notTestable"); // <-- Google Apps Script function. Not callable in dev
    SpreadsheetApp.getUi(); // <-- Google Apps Script function. Not callable in dev
    ...
}
```

### Other Helpful Resources

TODO: add that goat guy that starts with "y"

## :icecream: SOMISOMI EDITS by Mark

This template project is a modification of Amit Agarwal's template

Project is tweaked for SOMISOMI purposes.

Follow Getting Started above...

[:fish:SOMISOMI](https://www.somisomi.com/)
