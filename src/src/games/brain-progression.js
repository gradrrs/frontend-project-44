import { importName } from "./cli.js"
import { askQuestion, congratulation, evenQuest, isCorrect, progressionOrNot, tryAgain, wrongAnswerGcd } from '../index.js';

const progressionNumber = () => {
    progressionOrNot()
    let count = 0
   for (let i = 0; i < 3; i += 1){
       let step = Math.floor(Math.random() * 10 + 1)
       let start_value = Math.floor(Math.random() * 100 + 1)
       let target = Math.floor(Math.random() * 10 + 1)
       let massive = []
       let quest_number = undefined
       for (let x = 0; x < 11; x += 1){
           if (target == x){
               quest_number = start_value
               massive.push('..')
           }else {
               massive.push(start_value)
               } 
           start_value += step
       }
       evenQuest(massive.join(' '))
       let answer = askQuestion()
       if (quest_number == answer){
            isCorrect()
           count += 1
       }else {
           wrongAnswerGcd(answer, quest_number)
           tryAgain() 
           break 
       }
   }
   if (count == 3){
       congratulation()
   }
}

export default progressionNumber