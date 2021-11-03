typescript packages includes tsc (typescript compiler)

tsc --init autogenerates .tsconfig file

ts-node

typescript ts-node nodemon @types/node @types/express

start command: "node dist/app.js"
dev: "nodemon src/app.ts"
build: "tsc -p"

tsc compiles the typecript

To set up env for cli dev:

1. Create ./bin folder (replaces ./dist)
2. set TSC output dir to ./bin
3. Go to package.json, rename project and create "bin": "./bin/projectName.js" property
4. Put shebang in main file (./src/projectName.ts)
5. Run `npm link`
6. Add watch options to tsconfig.json
7. Install following packages: commander, chalk (possibly inquirer for input, or configstore for storing API keys)
