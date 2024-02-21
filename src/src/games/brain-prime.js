import {
  askQuestion, isCorrect, congratulation, tryAgain,
  evenQuest, welcome, questionGame, brainFalseAnswer,
} from '../index.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const massive = [];
  for (let x = 2; x < number; x += 1) {
    if (number % x === 0) {
      massive.push(x);
    }
  }
  if (massive.length === 0) {
    return 'yes';
  }
  return 'no';
};

welcome();
const isPrimeNumber = () => {
  let count = 0;
  questionGame(question);
  for (let x = 0; x < 3; x += 1) {
    const randomPrime = Math.floor(Math.random() * 100 + 1);
    evenQuest(randomPrime);
    const answer = askQuestion();
    evenQuest(randomPrime);
    if (answer === isPrime(randomPrime)) {
      isCorrect();
      count += 1;
    } else {
      brainFalseAnswer(answer, isPrime(randomPrime));
      tryAgain();
      break;
    }
  }
  if (count === 3) {
    congratulation();
  }
};

export default isPrimeNumber;
