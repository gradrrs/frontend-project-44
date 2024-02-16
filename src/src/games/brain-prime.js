import { importName } from "./cli.js";
import { askQuestion, isCorrect, congratulation, primeOrNot, tryAgain, evenQuest} from '../index.js';

const isPrimeNumber = () => {
    let randomPrime = Math.floor(Math.random() * 100 + 1);
    primeOrNot();
    evenQuest(randomPrime);
    let answer = askQuestion();
    if (answer == isPrime(randomPrime)){
        isCorrect();
        congratulation();
    }else {
        tryAgain();
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