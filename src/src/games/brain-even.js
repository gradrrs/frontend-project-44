import {
  askQuestion, isCorrect, congratulation, questionGame, tryAgain,
  evenQuest, welcome, brainFalseAnswer,
} from '../index.js';
// import { cli } from './cli.js';
// import { importName } from '../../../bin/cli.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = () => {
  const massive = {
    yes: 'no',
    no: 'yes',
  };
  welcome();
  let count = 0;
  questionGame(question);
  for (let i = 0; i < 3; i += 1) {
    const x = String(Math.random())[2];
    evenQuest(x);
    const input = askQuestion();
    const y = parseInt(x, 10);
    if ((y % 2 === 0 && input === 'yes') || (y % 2 !== 0 && input === 'no')) {
      isCorrect();
      count += 1;
    } else {
      brainFalseAnswer(input, massive[input]);
      tryAgain();
      break;
    }
  }
  if (count === 3) {
    congratulation();
  }
};
export default isEven;
