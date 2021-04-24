const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log("Welcome " + name + " You find yourself trapped in a locked room. It is your job to find a way to escape. When you are ready to play type one of these commands. Put hand in hole, find key, or open the door")
var play = readline.question("Pick first action")