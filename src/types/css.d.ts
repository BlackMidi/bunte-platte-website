// I don't really know what this does, but it's needed to use CSS modules in TypeScript lol

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
} 