# holbertonschool-web_react — TypeScript mini-projects

This repository groups a series of small, focused TypeScript exercises used in the Holberton School Web/React curriculum. Each task is self-contained with its own configuration and build scripts. The goal is to practice TypeScript fundamentals, module systems, and simple tooling you will also use in React projects.

## Repository structure
- `TypeScript/task_0` … `TypeScript/task_5`: Individual tasks with their own `package.json`, `tsconfig.json`, and (for most) `webpack.config.js`.

## Prerequisites
- Node.js (LTS recommended)
- npm

## Getting started (per task)
1) Navigate to a task directory, for example:
```
cd TypeScript/task_0
```
2) Install dependencies:
```
npm install
```
3) Build the task:
```
npm run build
```
4) Optional (if provided in the task): start a dev server or run the compiled output:
```
npm run dev
# or
npm start
```

## What you’ll practice across the tasks
- TypeScript basics: types, interfaces, functions
- ES6 classes and typing class members
- Working with modules and simple build tooling (tsc, webpack)
- Ambient declarations and interop with existing JS (`.d.ts`)
- Namespaces and basic domain modeling (e.g., `Teacher`, subjects)

## Requirements
- All files end with a new line
- Code compiles with no TypeScript errors
- Prefer `.ts` where possible
- Checked with Jest 24.9.* (where applicable)

## Notes
- Each task is independent. Build and run them from within their respective directories.
- Some tasks include a `webpack.config.js` for bundling; others compile with `tsc` only.
