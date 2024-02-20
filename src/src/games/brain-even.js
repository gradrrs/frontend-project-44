import {
  askQuestion, isCorrect, congratulation, EvenOrNot, tryAgain, gameOver, evenQuest,
} from '../index.js';

const isEven = () => {
  let count = 0;
  EvenOrNot();
  for (let xx = 0; xx < 3; xx += 1) {
    const x = String(Math.random())[2];
    evenQuest(x);
    const input = askQuestion();
    if ((x % 2 === 0 && input === 'yes') || (x % 2 !== 0 && input === 'no')) {
      isCorrect();
      count += 1;
    } else {
      gameOver();
      tryAgain();
      break;
    }
    if (count === 3) {
      congratulation();
    }
  }
};
export default isEven;
