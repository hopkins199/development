var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
function forception(people, alphabet){

    var newArray = []

    var newAlpha = alphabet.toUpperCase().split("").join('","')
    
    for(var i = 0; i < people.length; i++){
        for(var j = 0; j < newAlpha[i].length; j++){
            newArray.push(people[i] +":"+" ".concat(newAlpha))
        }
    }
    return newArray
}
const arr = forception(people, alphabet)
console.log(arr)