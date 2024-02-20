import readlineSync from 'readline-sync';
import { importName } from './games/cli.js';

const askQuestion = () => readlineSync.question('Your answer: ');

const isCorrect = () => {
  console.log('Correct!');
};

const congratulation = () => {
  console.log(`Congratulations, ${importName}!`);
};

const resultCalc = () => {
  console.log('What is the result of the expression?');
};

const EvenOrNot = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const WhatGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const primeOrNot = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const progressionOrNot = () => {
  console.log('What number is missing in the progression?');
};

const tryAgain = () => {
  console.log(`Let's try again, ${importName}!`);
};

const gameOver = () => {
  console.log('Game over!');
};

const brainFalseAnswer = (calculation, result) => {
  console.log(`${calculation}' is wrong answer ;(. Correct answer was '${result}'.`);
};

const evenQuest = (x) => {
  console.log(`Question: ${x}`);
};

const wrongAnswerGcd = (UserInput, target) => {
  console.log(`'${UserInput}' is wrong answer ;(. Correct answer was '${target}.'`);
};

const gcdNumber = (x1, x2) => {
  console.log(`Question: ${x1} ${x2}`);
};

const calcOperator = (operator, x1, x2) => {
  console.log(`Question: ${x1} ${operator} ${x2}`);
};

export {
  isCorrect, askQuestion, congratulation, resultCalc, EvenOrNot,
  evenQuest, WhatGcd, calcOperator, wrongAnswerGcd,
  gcdNumber, primeOrNot, progressionOrNot, brainFalseAnswer, tryAgain, gameOver,
};
