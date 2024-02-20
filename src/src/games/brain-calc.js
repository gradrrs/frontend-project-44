import {
  congratulation, askQuestion, isCorrect, calcOperator, resultCalc, tryAgain,
  wrongAnswerGcd,
} from '../index.js';

const getRandomInt = () => Math.floor(Math.random() * 3);

const generateRandomNumber = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;

const calculate = () => {
  const massive = {
    0: '+',
    1: '-',
    2: '*',
  };
  let count = 0;
  resultCalc();
  for (let x = 0; x < 3; x += 1) {
    const number1 = generateRandomNumber();
    const number2 = generateRandomNumber();
    let result;
    const operator = getRandomInt();
    if (massive[operator] === '+') {
      result = number1 + number2;
      calcOperator(massive[operator], number1, number2);
    } else if (massive[operator] === '-') {
      result = number1 - number2;
      calcOperator(massive[operator], number1, number2);
    } else {
      result = number1 * number2;
      const umn = '*';
      calcOperator(umn, number1, number2);
    }
    const calculation = askQuestion();
    if (calculation === result) {
      count += 1;
      isCorrect();
    } else {
      wrongAnswerGcd(calculation, result);
      tryAgain();
      break;
    }
  }
  if (count === 3) {
    congratulation();
  }
};

export default calculate;
