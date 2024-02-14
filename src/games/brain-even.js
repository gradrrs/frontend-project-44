import readlineSync from 'readline-sync';
import {importName} from './cli.js';
const isEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    let count = 0
    for (let x = 0; x < 3; x += 1){
        let x = String(Math.random())[2]
        console.log(`Question: ${x}`)
        let input = readlineSync.prompt('Your answer: ')
        if ((x % 2 == 0 && input == 'yes') || (x % 2 != 0 && input == 'no')){
            console.log('Correct!')
            count += 1
        }else {
            console.log('Game over')
            break
        }
    if (count == 3){
        console.log(`Congratulations, ${importName}!`)
    }
}
}
export { isEven }