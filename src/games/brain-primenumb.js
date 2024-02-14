import { importName } from "./cli.js";
import readlineSync from 'readline-sync';
const isPrimeNumber = () => {
    let randomPrime = Math.floor(Math.random() * 100 + 1)
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
    console.log(`Question: ${randomPrime}`)
    let answer = readlineSync.question('Your answer: ')
    if (answer == isPrime(randomPrime)){
        console.log('Correct!')
        console.log(`Gradulations, ${importName}!`)
    }else {
        console.log(`answer ${answer} is not correct, "${isPrime(randomPrime)}" was correct`)
    }
}

const isPrime = (number) => {
    let massive = []
    for (let x = 2; x < number; x += 1){
        if (number % x == 0){
            massive.push(x)
        }
    }
    if (massive.length == 0){
        return 'yes'
    }  else{
        return 'no'
    }
}


export {isPrime, isPrimeNumber}