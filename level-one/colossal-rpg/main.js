const readline = require("readline-sync")
// Introduction
const playerName = readline.question("Welcome to the adventure of a lifetime. You find yourself on the mysterious planet of Hellandria after being transported in the middle of the night. The only way home is to find the Wizard's Castle on the other side of this forest. Why do I know this you ask? I just do and if you want to live you should just trust me. Please tell me your name adventurer.    ")
console.log(playerName + "... oh what a rather odd name. Well what do i know my name is Quigmarz. This forest is filled with strange enemies that may try to attack or kill you. Fear not I will give you your first weapon to defend yourself. As you start your adventure here are your tools for success. Press W to walk, press P to print and that will show your inventory and health status.")

let isAlive = true
let playersHp = 50
let inventory = []
let badGuys = []
let playerMinD = 3
let playerMaxD = 6

// Enemies
function Enemies(enemyName, minDamage, maxDamage, hp, item, status){
    this.enemyName = enemyName
    this.minDamage = minDamage
    this.maxDamage = maxDamage
    this.hp = hp
    this.item = item
    this.status = status
    this.isDead = false
}

const pumbatta = new Enemies("Pumbatta", 4,9,10, "none","There's no Hakuna Matatta with this boar. Fight for your life or run like Hellandria.")
const squiznack = new Enemies("Squiznack", 5,10,15, "Heavy Axe", "This is the most handsome Tree Orgre you ever saw. Well this is the first tree ogre you ever saw.")
const quazzard = new Enemies("Quazzard", 5,11,17, "Crooked Sword", "A trap door orc that pops up out of the ground at any time.")
const bob = new Enemies("Bob", 6,12,20, "broken keyboard","An evil programmer who couldn't make it to the wizards castle. Now he tries to kill all who seek the wizard")

badGuys.push(pumbatta, squiznack, quazzard, bob)

// Let the fun begin
while (isAlive) {
    //readlineSync.setDefaultOptions({ limit: ["w", "p", "q"]})
    let getStarted = readline.question(`My hero ${playerName}, [w]alk, [p]rint, [q]uit?    `)
    if(getStarted === "q") {
        console.log("Hellandria has ended. Enjoy your new home in the forest")
        isAlive = false
    }
    else if(getStarted === "p"){
        console.log(`name: ${playerName}, hp:${playersHp}, Inventory:${inventory}`)
    }
    else if (getStarted === "w"){
        if(badGuys.length === 0){
                isAlive = false
                console.log(`${playerName}, you have wandered long and far to reach your destination, the stronghold of the Wizard. There is a sign next to the huge door that reads. "Welcome hero of Hellandria. Once you open this door you will be on your way to going home. We thank you for vanquishing all the foes of the forest. The wizard would have done it but his wheelchair can't make it down the stairs." After reading the note you open the door and are instantly transported back into your bedroom. You take off you your jacket and hear a loud metal clank as it hits the floor. You inspect the jacket and find your sword that was used in Hellandria. "Huh maybe it really did happen"`)
                console.log("Thanks for playing Hellandria")
        }
        else{
            explore()
        }
    }
}

function explore(){
    let num = Math.floor(Math.random() * 4)
    if (num === 3){
        fight()
    } else (
        console.log("You walk along without being noticed...")
    )
}

function baddieSelector(){
    let randoBaddie = badGuys[Math.floor(Math.random() * badGuys.length - 1)]
    let randoNum = badGuys.splice(randoBaddie, 1)[0]
    return randoNum
}

// First enemy appears

function fight(){
    console.log("An enemy has appreared")
    //readlinesync.setDefaultOptions({ limit: ["a", "r", "q"]})
    let decide = readline.question("Do you want to [a]ttack, [r]un or [q]uit and join the baddies   ")
    if (decide === "q"){
        quit()
    }   else if (decide === "a"){
        attack("a")
        return decide
    }   else if (decide === "r"){
        run()
    }
}

// time to fight the baddie

function attack(choice){
    let currentBaddie = baddieSelector()
    while(playersHp > 0 && currentBaddie.hp > 0){
        let playerAttack = Math.floor(Math.random() * (playerMaxD - playerMinD)) + playerMaxD
        let baddieAttacks = Math.floor(Math.random() * (currentBaddie.maxDamage - currentBaddie.minDamage))
        let fight = readline.question("You can attack or try to run, choose: [a]ttack or [r]un....", { limit: ["a", "r"] })
        if (choice === "a") {
            console.log("Attack in progress")
            currentBaddie.hp = currentBaddie.hp - playerAttack
            console.log(`${playerName}!, ${currentBaddie.enemyName} is hurt! ${currentBaddie.enemyName} took ${playerAttack} points of damage! ${currentBaddie.enemyName} currently has ${currentBaddie.hp} health points!`)

            playersHp = playersHp - baddieAttacks
            console.log(`${currentBaddie.enemyName} is attacking you! ${currentBaddie.enemyName} dealt ${baddieAttacks} points of damage to you. You have ${playersHp} health points remaining`)

            if(currentBaddie.hp <= 0){
                inventory.push(currentBaddie.item)
                console.log(`${playerName}, you defeated ${currentBaddie.enemyName}. You could have received an item, check inventory..`)
                console.log(inventory)
                console.log("You continue on your journey")
            }
            if(playersHp <= 0){
                console.log("You were vanquished by your foe...")
                isAlive = false
            }
        } else if(fight === "r"){
            run()
        }
    }
}

// Trying to run
function run() {
    let escape = Math.floor(Math.random() * 2)
    const currentBaddie = baddieSelector()
    if (escape === 1) {
        console.log(`${playerName}, you have escaped!`)
        explore()
    } else {
        console.log(`${playerName}! ${currentBaddie.enemyName} blocked your ESCAPE!. Now, ${currentBaddie.enemyName} is going to attack! Will you defend yourself?!`)
        attack(currentBaddie)
    }
}

// quitting
function quit(){
    console.log("You have forfieted your chance to make it home. Hellandria is your new home and you will surely die a horrible death.")
    isAlive = false
}