var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop()
fruit.shift()
var orangeIndex = fruit.indexOf("orange")
fruit.push(orangeIndex)
fruit.length
vegetables.push(fruit.length)
var food = fruit.concat(vegetables)
var newFood = food.splice(4, 2)
food.reverse()
var finish = food.join()
console.log(finish)
