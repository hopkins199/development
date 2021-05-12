var pickles = "pickles"
var upperCase = pickles.toUpperCase()
var lowerCase = pickles.toLowerCase()    
var upperAndLower = upperCase.concat(lowerCase)

var hello = "Hello"
var helloWorld = "Hello World"

function myFunc(string){
    
    return Math.floor(string.length/2)
}

function slicey(string, func){
    var halfling = func(string)
    var firstHalf = string.slice(0, halfling)
    return firstHalf
}

function upAndDown(string,){
    if(string.length %1){
        var firstHalf = Math.floor(string.length/2)
    }
    else {
        var firstHalf = string.length/2
    }
    var firstCut = string.slice(0, firstHalf)
    var firstUpper = firstCut.toUpperCase()
    var secondCut = string.slice(firstHalf)
    var secondLower = secondCut.toLowerCase()
    var allTogether = firstUpper.concat(secondLower)
    return allTogether
}
console.log(upAndDown(helloWorld))