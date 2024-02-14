import readlineSync from 'readline-sync';
import { importName } from "./cli.js"
const nod = () => {
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
    let user_input = readlineSync.question(`Question: ${x1} ${x2} `)
    if (user_input == target){
        console.log('Correct!')
        track += 1
    }else {
        console.log(`${user_input} is wrong answer ;(. Correct answer was  ${target}. \nLet's try again, ${importName}!`)
        break
       }  
     }
    if (track == 3){
        console.log(`Congratulations, ${importName}!`)    
}
}
export {nod};