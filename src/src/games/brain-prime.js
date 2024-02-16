import { importName } from "./cli.js";
import { wrongAnswerGcd, askQuestion, isCorrect, congratulation, primeOrNot, tryAgain, evenQuest} from '../index.js';

const isPrimeNumber = () => {
    let count = 0
    for (let x = 0; x < 3; x += 1){
    let randomPrime = Math.floor(Math.random() * 100 + 1);
    primeOrNot();
    evenQuest(randomPrime);
    let answer = askQuestion();
    if (answer == isPrime(randomPrime)){
        isCorrect();
        count += 1
    }else {
        wrongAnswerGcd(answer, isPrime(randomPrime))
        tryAgain();
        break
    }
}
    if (count == 3){
        congratulation();
    }
}

const isPrime = (number) => {
    let massive = [];
    for (let x = 2; x < number; x += 1){
        if (number % x == 0){
            massive.push(x);
        }
    }
    if (massive.length == 0){
        return 'yes';
    }  else{
        return 'no';
    }
}


export default isPrimeNumber;