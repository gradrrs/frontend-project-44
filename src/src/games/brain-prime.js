import {
  wrongAnswerGcd, askQuestion, isCorrect, congratulation, primeOrNot, tryAgain, evenQuest,
} from '../index.js';

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

const isPrimeNumber = () => {
  let count = 0;
  for (let x = 0; x < 3; x += 1) {
    const randomPrime = Math.floor(Math.random() * 100 + 1);
    primeOrNot();
    evenQuest(randomPrime);
    const answer = askQuestion();
    if (Math.abs(answer) === Math.abs(Prime(randomPrime))) {
      isCorrect();
      count += 1;
    } else {
      wrongAnswerGcd(answer, isPrime(randomPrime));
      tryAgain();
      break;
    }
  }
  if (count === 3) {
    congratulation();
  }
};

export default isPrimeNumber;
