import {
  congratulation, askQuestion, isCorrect, tryAgain,
  welcome, questionGame, answerQuest, brainFalseAnswer,
} from '../index.js';

const getRandomInt = () => Math.floor(Math.random() * 3);
const question = 'What is the result of the expression';
const generateRandomNumber = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
welcome();
questionGame(question);
const calculate = () => {
  const massive = {
    0: '+',
    1: '-',
    2: '*',
  };
  let count = 0;
  for (let x = 0; x < 3; x += 1) {
    const number1 = generateRandomNumber();
    const number2 = generateRandomNumber();
    let result;
    const operator = getRandomInt();
    if (massive[operator] === '+') {
      result = number1 + number2;
      const str = `${number1} ${massive[operator]} ${number2}`;
      answerQuest(str);
    } else if (massive[operator] === '-') {
      result = number1 - number2;
      const str = `${number1} ${massive[operator]} ${number2}`;
      answerQuest(str);
    } else {
      result = number1 * number2;
      const str = `${number1} ${massive[operator]} ${number2}`;
      answerQuest(str);
    }
    const calculation = askQuestion(question);
    if (Math.abs(calculation) === Math.abs(result)) {
      count += 1;
      isCorrect();
    } else {
      brainFalseAnswer(calculation, result);
      tryAgain();
      break;
    }
  }
  if (count === 3) {
    congratulation();
  }
};

export default calculate;
