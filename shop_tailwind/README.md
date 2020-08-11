## Tailwind-CRA (Create-React-App) Parallet Build Flow Template

This template added support for TailwindCSS and integrate with the CRA build flow. A summary of the workflow is described below.

### Parallel Compilation
Referring to [package.json](./package.json) scripts:
- chokidar-cli: watch for changes in [src/tailwind.css](./src/tailwind.css) and initiate rebuilds
- npm-run-all: parallel build of tailwindcss & CRA build flow

The compiled ```tailwind.output.css``` resides in ```./src``` folder with ```tailwind.css``` and is ignored by ```.gitignore``` on purpose. This output css should always be automatically generated with optional modifications inside [src/tailwind.css](./src/tailwind.css). ```tailwind.output.css1``` should never be modified manually.

Changes in ```tailwind.css``` is automatically watched and recompiled alongside CRA build flow.

### Purge CSS
CSS purge is supported after ```Tailwindcss 1.4.0``` and is achieved by including a simple config file [tailwind.config.js](./tailwind.config.js). It detected the CSS classes used across the project and only compiled the corresponding css attributes in the output ```tailwind.output.css```, drastically decreasing the file size.

### Example
An example code template is included under [src/index.js](./src/index.js). It shows a simple example of how CRA work with ```Tailwindcss``` build flow.

### Run
Under current directory, run:

```npm start```