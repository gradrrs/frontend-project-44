import {
  askQuestion, isCorrect, congratulation, questionGame, tryAgain, answerQuest, welcome,
} from '../index.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = () => {
  welcome();
  let count = 0;
  questionGame(question);
  for (let i = 0; i < 3; i += 1) {
    const x = String(Math.random())[2];
    answerQuest(x);
    const input = askQuestion();
    if ((x % 2 === 0 && input === 'yes') || (x % 2 !== 0 && input === 'no')) {
      isCorrect();
      count += 1;
    } else {
      tryAgain();
      break;
    }
  }
  if (count === 3) {
    congratulation();
  }
};
export default isEven;
