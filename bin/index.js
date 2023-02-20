#! /usr/bin/env node
console.log("Generating a ReactJS Microfrontend Template...");

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Please enter remote_name and port arguements, example: npx mfe-reactjs-template about 3001');
  process.exit(1);
}


console.log("Generation complete.");
process.exit(0);