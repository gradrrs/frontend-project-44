import { importName } from './cli.js';
import { askQuestion, isCorrect, congratulation, EvenOrNot, tryAgain, gameOver, evenQuest } from '../index.js';

const isEven = () => {
    let count = 0
    EvenOrNot()
    for (let x = 0; x < 3; x += 1){
        let x = String(Math.random())[2]
        evenQuest(x)
        let input = askQuestion()
        if ((x % 2 == 0 && input == 'yes') || (x % 2 != 0 && input == 'no')){
            isCorrect()
            count += 1
        }else {
            gameOver()
            tryAgain()
            break
        }
    if (count == 3){
        congratulation()
    }
}
}
export default isEven;