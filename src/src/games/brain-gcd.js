import {
  askQuestion, isCorrect, congratulation, tryAgain,
  questionGame, welcome, brainFalseAnswer, evenQuest,
} from '../index.js';

welcome();
const question = 'Find the greatest common divisor of given numbers.';
const nod = () => {
  questionGame(question);
  let track = 0;
  for (let x = 0; x < 3; x += 1) {
    const x1 = Math.floor(Math.random() * 100 + 1);
    const x2 = Math.floor(Math.random() * 100 + 1);
    let target;
    for (let count = 0; count < Math.max(x1, x2); count += 1) {
      if (x1 % count === 0 && x2 % count === 0) {
        target = count;
      }
    }
    const str = `${x1} ${x2}`;
    evenQuest(str);
    const UserInput = askQuestion();
    if (Math.abs(UserInput) === Math.abs(target)) {
      isCorrect();
      track += 1;
    } else {
      brainFalseAnswer(UserInput, target);
      tryAgain();
      break;
    }
  }
  if (track === 3) {
    congratulation();
  }
};
export default nod;
