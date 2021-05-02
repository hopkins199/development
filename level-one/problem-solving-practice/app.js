// problem one 
//Write a function that takes an array of numbers and returns the largest (without using Math.max())
let largest = [3, 5, 2, 8, 1] // => 8

let largestOne = largest.reduce(function(x,y){
    return (x > y) ? x : y;
})
console.log(largestOne)

// problem two
//Write a function that takes an array of words and a character and returns each word that has that character present.
//lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]
function two(array, char){
    var newArray = []
    for(var i = 0; i < array.length; i++ ){
        var eachWord = array[i]
        for(var j = 0; j < eachWord.length; j++){
            if (eachWord[j] === char){
                newArray.push(eachWord)
            }
        }
    }
    return newArray
}
console.log(two(["#3", "$$$", "C%4!", "Hey!"], "!"))

// problem three
// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
//isDivisible(4, 2) // => true
//isDivisible(9, 3) // => true
//isDivisible(15, 4) // => false
function divis(num1, num2){
    if (num1 % num2 === 0){
        return true
    } else {
        return false
    }
}
console.log(divis(7,3))