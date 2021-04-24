const readline = require("readline-sync");
var readLineSync = require("readline-sync");
var firstNum = readLineSync.question("Please enter the first number. ")
firstNum = parseInt(firstNum);
var secondNum = readLineSync.question("Please enter the second number. ")
secondNum = parseInt(secondNum);
var op = readLineSync.question("Please enter the operation to perform. + - * / ")
if (op === "+") {
    add (firstNum, secondNum)
}
else if (op === "*") {
    mul (firstNum, secondNum)
}
else if (op === "-") {
    sub (firstNum, secondNum)
}
else if (op === "/") {
    div (firstNum, secondNum)
}
function add(num1, num2) {
    var result = num1 + num2
    console.log("The result is " + result);
}
function mul(num1, num2) {
    var result = num1 * num2
    console.log("The result is " + result);
}
function sub(num1, num2) {
    var result = num1 - num2
    console.log("The result is " + result);
}
function div(num1, num2) {
    var result =  num1 / num2;
    console.log("The result is " + result);
}