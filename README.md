# Tarkony-express-backend

## Project Setup Steps

1. Initialized npm and created a default Express.js project with TypeScript and ESM support.
2. Installed dependencies:
   - express
   - typescript
   - ts-node
   - nodemon
   - @types/express
   - @types/node
   - cors, axios, pg, graphql (optional extras)
3. Configured `tsconfig.json` for ESNext modules and Node.js resolution.
4. Updated `package.json`:
   - Set `type` to `module` for ESM
   - Set `main` to `src/index.ts`
   - Added scripts for start, build, serve, and test
5. Created a basic Express server in `src/index.ts` using ESM and TypeScript.
6. Added a `.gitignore` file for Node.js, TypeScript, build output, logs, environment files, and editor settings.
7. Installed Jest, ts-jest, and @types/jest for testing.
8. Added Jest config (`jest.config.cjs`) and a default test in `__tests__/sample.test.ts`.
9. Verified Jest setup with a passing test.
