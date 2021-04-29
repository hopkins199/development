// Preliminaries
for(var i = 0; i < 10; i++){
    console.log(i)
}

for(var i = 9; i > 0; i--){
    console.log(i)
}
const fruit = ["banana", "orange", "apple", "kiwi"]
    for(var i = 0; i < fruit.length; i++){
        console.log(fruit[i])
    }

// Bronze
var items = []
for(var i = 0; i < 10; i++){
    items.push(i) 
}
console.log(items)
for(var i = 0; i < 100; i+=2){
    console.log(i)
}
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
    for(var i = 0; i < fruit.length; i++){
        if(i%2 === 0) {
            console.log(fruit[i])
        }
    }