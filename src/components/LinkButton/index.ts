export { LinkButton } from './LinkButton';  

// This index.ts file is also called a “barrel file.” It acts as a public entry point for the LinkButton folder. 
// Its here to collect and pass on exports from other files in the same folder. 
// This gives us an advantage when importing the LinkButton:
// Without index.ts, we would have to write:
// import { LinkButton } from ‘../components/LinkButton/LinkButton’;
// (We would have to specify the folder and the file, which leads to lots of repetitions)
// With this index.ts file, we can write:
// import { LinkButton } from ‘../components/LinkButton’;
// (We only specify the folder, and our bundler "Vite" auto finds the index.ts file and knows what to import.)