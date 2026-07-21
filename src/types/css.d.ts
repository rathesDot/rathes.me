// Ambient declaration for global CSS side-effect imports (e.g. `import "@/styles/globals.css"`).
// Next.js processes these at the bundler level and does not ship a type declaration for them,
// so we declare the module here to satisfy TypeScript's side-effect import check.
declare module "*.css";
