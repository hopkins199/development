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

friendlyPeople = arr => arr.filter(peoples => (peoples.friendly))

console.log(friendlyPeople)