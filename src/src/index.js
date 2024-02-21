import readlineSync from 'readline-sync';

const askQuestion = () => readlineSync.question('Your answer: ');

let importName;

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  importName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${importName}`);
};

const isCorrect = () => {
  console.log('Correct!');
};

const congratulation = () => {
  console.log(`Congratulations, ${importName}!`);
};

export const questionGame = (question) => {
  console.log(question);
};

const tryAgain = () => {
  console.log(`Let's try again ${importName}!`);
};

const brainFalseAnswer = (calculation, result) => {
  console.log(`${calculation}' is wrong answer ;(. Correct answer was '${result}'.`);
};

const evenQuest = (x) => {
  console.log(`Question: ${x}`);
};

export {
  isCorrect, askQuestion, congratulation,
  evenQuest, welcome,
  brainFalseAnswer, tryAgain,
};
