import readlineSync from 'readline-sync';

let importName;

const cli = () => {
  console.log('Welcome to the Brain Games!')
  importName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${importName}`);
}

export {importName, cli};