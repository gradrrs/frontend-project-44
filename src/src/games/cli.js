import readlineSync from 'readline-sync';

const importName = '';

const cli = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  importName = name;
  console.log(`Hello, ${importName}`);
};

export { importName, cli };
