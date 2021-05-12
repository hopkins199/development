//qualifier
var header = document.querySelector("#header")
header.textContent = "JavaScript Made This!!"
header.style.textAlign = "center"
header.style.fontSize = "35px"
header.style.fontWeight = "bold"
var newH4 = document.createElement("h4")
//newH4.textContent = "Drew Hopkins wrote the JavaScript"
var span = document.createElement("span")
span.textContent = "Drew Hopkins"
span.style.color = "blue"
span.style.fontFamily = "comic sans ms"
newH4.append(span, " wrote the JavaScript")
header.append(newH4)
newH4.style.fontSize = "20px"
//bronze
document.getElementsByClassName("message")
const messages = document.getElementsByClassName("message")
messages[0].textContent = "Welcome to the Thunderdome. How may I assist"
messages[1].textContent = "I am looking for the gift shop."
messages[2].textContent = "Oh, yes we can help with that. let me pull up that info."
messages[3].textContent = "Thank you very much."

const deleteButton = document.getElementById("clear-button")
deleteButton.addEventListener("click" , function() {
    messages[0].textContent = ""
    messages[1].textContent = ""
    messages[2].textContent = ""
    messages[3].textContent = ""
    messages[0].style.backgroundColor = "white"
    messages[1].style.backgroundColor = "white"
    messages[2].style.backgroundColor = "white"
    messages[3].style.backgroundColor = "white"
})
//silver
Element.classList.toggle("theme-two")
for(let i = 0; i < messages.length; i++) {
    messages[i].classList.toggle("theme-two")
}

const themeTwo = document.getElementById("theme-two")
themeTwo.addEventListener("click" , function(){
    messages[0].style.backgroundColor = "red"
    messages[0].style.color = "white"
    messages[1].style.backgroundColor = "black"
    messages[1].style.color = "white"
    messages[2].style.backgroundColor = "red"
    messages[2].style.color = "white"
    messages[3].style.backgroundColor = "black"
    messages[3].style.color = "white"
})