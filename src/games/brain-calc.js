import {importName} from './cli.js';
import readlineSync from 'readline-sync';


const getRandomInt = () => {
    return Math.floor(Math.random() * 3);
  }

const generateRandomNumber = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;

const calculate = () => {
    let count = 0
    let massive = {
        1 : '+',
        2 : '-',
        3 : '*'
    }
    console.log('What is the result of the expression?')
    for (let x = 0; x < 3; x += 1){
        let number1 = generateRandomNumber()
        let number2 = generateRandomNumber()
        let result
        let operator = getRandomInt()
        if (massive[operator] == '+'){
            result = number1 + number2
            console.log(`${number1} + ${number2}`)
        }else if (massive[operator] == '-'){
            result = number1 - number2
            console.log(`${number1} - ${number2}`)
        }else {
            result = number1 * number2
            console.log(`${number1} * ${number2}`)
        }
    let calculation = readlineSync.prompt('Your answer: ')
    if (calculation == result){
        count += 1
        console.log('Correct!')
    } else {
        console.log(`${calculation}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${importName}!`)
        break
    }
    }
    if (count == 3){
        console.log(`Congratulation, ${importName}`)
    
    }
}

export {calculate}