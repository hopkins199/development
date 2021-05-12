// 1    Turn an array of numbers into a total of all the numbers

const total = [1,2,3]
    const result = total.reduce(function(final, num){
        final += num
        return final
    })
//console.log(result)

// 2    Turn an array of numbers into a long string of all those numbers.

const stringConcat = [1,2,3].join("")
    
 //   console.log(stringConcat)

    // 3   Turn an array of voter objects into a count of how many people voted

    var voters = [
        {name:'Bob' , age: 30, voted: true},
        {name:'Jake' , age: 32, voted: true},
        {name:'Kate' , age: 25, voted: false},
        {name:'Sam' , age: 20, voted: false},
        {name:'Phil' , age: 21, voted: true},
        {name:'Ed' , age:55, voted:true},
        {name:'Tami' , age: 54, voted:true},
        {name: 'Mary', age: 31, voted: false},
        {name: 'Becky', age: 43, voted: false},
        {name: 'Joey', age: 41, voted: true},
        {name: 'Jeff', age: 30, voted: true},
        {name: 'Zack', age: 19, voted: false}
    ]

    const voterObj = voters.reduce(function(final, voter){
        if (voter.voted){
            final.didVote++
        } else {
            final.didntVote++
        }
        return final
    }, { didVote: 0, didntVote: 0 })
  //  console.log(voterObj)


  // 4  Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

  wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

const totalCost = wishlist.reduce(function(final,num){
    final += num.price
    return final
}, 0)
//console.log(totalCost)

// 5    Given an array of arrays, flatten them into a single array

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const merged = [].concat.apply([], arrays)
//console.log(merged)

//  6   Given an array of potential voters, return an object representing the results of the vote
        // Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voters2 = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const voterResults = (inVoters) => {
    const reducedObject = inVoters.reduce((a,b) => {
        if(b.age >= 18 && b.age <= 25 && b.voted) {
            a.numYoungVotes++
        }
        if(b.age >= 18 && b.age <= 25) {
            a.numYoungPeople++
        }
        if(b.age >= 26 && b.age <= 35 && b.voted) {
            a.numMidVotesPeople++
        }
        if(b.age >= 26 && b.age <= 35){
            a.numMidsPeople++
        }
        if(b.age >= 36 && b.age <= 55 && b.voted){
            a.numOldVotesPeople++
        }
        if(b.age >= 36 && b.age <= 55){
            a.numOldsPeople++
        }
        return {...a}
    }, {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0
      })
      return reducedObject
}
console.log(voterResults(voters2))