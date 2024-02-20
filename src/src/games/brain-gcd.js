import {
  askQuestion, isCorrect, congratulation, WhatGcd, tryAgain, wrongAnswerGcd, gcdNumber,
} from '../index.js';

const nod = () => {
  WhatGcd();
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
    gcdNumber(x1, x2);
    const UserInput = askQuestion();
    if (UserInput === target) {
      isCorrect();
      track += 1;
    } else {
      wrongAnswerGcd(UserInput, target);
      tryAgain();
      break;
    }
  }
  if (track === 3) {
    congratulation();
  }
};
export default nod;
