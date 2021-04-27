const readline = require("readline-sync");
const playerName = readline.question("What is your name? ");
console.log("Welcome " + playerName + " You find yourself trapped in a locked room. It is your job to find a way to escape. When you are ready to play type one of these commands. put hand in hole, find key, or open the door")
let play
function promptUser(){
    play = readline.question("Choose your action ")
}
promptUser()
var person = {
    name: playerName,
    isAlive: true,
    hasKey: false
}
var count = 0
while(person.isAlive) {
    if(play === "put hand in hole") {
        person.isAlive = false,
        console.log(playerName + " has died Game Over")
        break
    }
    else if(play === "find key") {
        if (count < 6) {
            console.log("key not found. keep looking")
            count++
            promptUser()
        }
        else {
            console.log(playerName + " has found the key")
            person.hasKey = true
            promptUser()
        }
    }
    else if(play === "open door") {
        if(person.hasKey === true) {
            console.log(playerName + " has used the key to escape the room. Congradulations")
            break
        }
        else {
            console.log("need key to open door")
            promptUser()
        } 

    }
}