import {
  askQuestion, congratulation, evenQuest, isCorrect, progressionOrNot, tryAgain, wrongAnswerGcd,
} from '../index.js';

const progressionNumber = () => {
  progressionOrNot();
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const step = Math.floor(Math.random() * 10 + 1);
    let StartValue = Math.floor(Math.random() * 100 + 1);
    const target = Math.floor(Math.random() * 10 + 1);
    const massive = [];
    let QuestNumber;
    for (let x = 0; x < 11; x += 1) {
      if (target === x) {
        QuestNumber = StartValue;
        massive.push('..');
      } else {
        massive.push(StartValue);
      }
      StartValue += step;
    }
    evenQuest(massive.join(' '));
    const answer = askQuestion();
    if (Math.abs(QuestNumber) === Math.abs(answer)) {
      isCorrect();
      count += 1;
    } else {
      wrongAnswerGcd(answer, QuestNumber);
      tryAgain();
      break;
    }
  }
  if (count === 3) {
    congratulation();
  }
};

export default progressionNumber;
