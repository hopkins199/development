// 1

let name = "John"
let age = 101

function runForLoop(pets) {
    const petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        //console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
   // console.log("man name: ", name)
    //return petObjects
}

runForLoop(["cat", "dog"])

// 2

const carrots = ["bright orange", "ripe", "rotten"]

mapVegetables = arr => arr.map(carrot => ({ type: "carrot", name: carrot }) )

// 3

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

/*function filterForFriendly(arr) {
    return arr.filter(function(person) {
        return person.friendly
    })
}*/

let friendlyPeople = people.filter(person => person.friendly)

console.log(friendlyPeople)

// 4 re-write in es6

function doMathSum(a, b) {
    return a + b
}

let doMathSum = (a,b) => a + b

var produceProduct = function(a, b) {
    return a * b
}

let produceProduct = (a,b) => a * b

//5 Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

// Hi Kat Stark, how does it feel to be 40?

let firstName = "Jane"
let lastName = "Doe"
let age = "100"

//console.log(`Hi ${firstName}, ${lastName}, how does it feel to be ${age}`)

// 6  Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 /* function filterForDogs(arr) {
     return arr.filter(animal => {
         if (animal.type === "dog") {
             return true
         } else {
             return false
         }
     })
 } */

 let filterForDogs = animals.filter(animal => animal.type === "dog")

 console.log(filterForDogs)


 