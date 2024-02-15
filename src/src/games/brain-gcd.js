import { importName } from "./cli.js"
import { askQuestion, isCorrect, congratulation, WhatGcd, tryAgain, wrongAnswerGcd, gcdNumber } from '../index.js';

const nod = () => {
    WhatGcd()
    let track = 0
for (let x = 0; x < 3; x += 1){
    let x1 = Math.floor(Math.random() * 100 + 1)
    let x2 = Math.floor(Math.random() * 100 + 1)
    let target = undefined
    for (let count = 0; count < Math.max(x1, x2); count += 1){
        if (x1 % count == 0 && x2 % count == 0){
        target = count
        }
    }
    gcdNumber(x1, x2)
    let user_input = askQuestion()
    if (user_input == target){
        isCorrect()
        track += 1
    }else {
        wrongAnswerGcd(user_input, target)
        tryAgain()
        break
       }  
     }
    if (track == 3){
        congratulation()    
    }
}
export {nod};