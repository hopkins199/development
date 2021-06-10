// Player constructor with hit powerup and coin

class Player {
    constructor(name){
        this.name = name
        this.totalCoins = 0
        this.status = "Small"
        this.hasStar = false
        this.playerIsAlive = true
    }
    gotHit = () => {
        if(this.hasStar === true){
            console.log("Your star has protected you!")
            this.hasStar = false
            this.status = "Big"
            return this.status
        } else {
            if(this.status === "Big"){
                this.status = "Small"
                return this.status
            } else if(this.status === "Small") {
                console.log(`${this.name} has Died! \nFinal Score: ${this.totalCoins} \n`)
                this.playerIsAlive = false
                gameActive = false
            }
        }
    }
    gotPowerup = () => {
        if(this.status === "Small"){
            this.status = "Big"
        } else if (this.status === "Big"){
            this.hasStar = true
            this.status = "Powered Up"
            console.log("You got a Star!")
        }
    }
    addCoin = () => {
        this.totalCoins = this.totalCoins + 1
    }
    print = () => {
        console.log(`Player Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins} \n`)
    }
}

// random num generator

const rando = (max) =>{
    let num = Math.floor(Math.random() * max)
    return num
}

// moving the player

const playerMove = (player) => {
    let option = rando(3)
    if (option === 0) {
        player.gotHit()
        return
    } else if (option === 1) {
        if (player.hasStar === true) {
            player.gotHit()
            return
        } else { 
            player.gotPowerup()
            return
        }
    } else {
        player.addCoin()
        return
    }
}

// running the game

function letsGame(player) {
    const runInterval = setInterval(() => {
        playerMove(player)
        if (player.playerIsAlive === false) {
            clearInterval(runInterval)
        } else { 
            player.print()}
    }, 1000)
};

// is the game active

gameActive = true

// our players

let mario = new Player("Mario")
let luigi = new Player("Luigi")
letsGame(mario)