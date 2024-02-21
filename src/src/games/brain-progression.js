import {
  askQuestion, congratulation, evenQuest, isCorrect, tryAgain,
  welcome, questionGame, brainFalseAnswer,
} from '../index.js';

const question = 'What number is missing in the progression?';
welcome();

const progressionNumber = () => {
  questionGame(question);
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
      brainFalseAnswer(answer, QuestNumber);
      tryAgain();
      break;
    }
  }
  if (count === 3) {
    congratulation();
  }
};

export default progressionNumber;
