import { importName } from "./cli.js"
import readlineSync from 'readline-sync';

const progressionNumber = () => {
   console.log('What number is missing in the progression?')
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
       console.log(`Question: ${massive.join(' ')}`)
       let answer = readlineSync.question('Your answer: ')
       if (quest_number == answer){
           console.log('Correct!')
           count += 1
       }else {
           console.log(`${answer} is wrong answer ;(. Correct answer was '${quest_number}'`)
           console.log(`Lets try again, ${importName}!`)
           break 
       }
   }
   if (count == 3){
       console.log(`Congratulations, ${importName}!`)
   }
}

export {progressionNumber}