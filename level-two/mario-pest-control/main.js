const form = document.totalBill

let maths = document.getElementById("calc").addEventListener("click", function(event){
    event.preventDefault()
    let goombaV = document.getElementById("goomba").value * 5
    let bobombV = document.getElementById("bobomb").value * 7
    let cheepV = document.getElementById("cheep").value * 11
    let bill = goombaV + bobombV + cheepV
    let pTotal = document.createElement("p")
    pTotal.id = "finalBill"
    pTotal.textContent = bill
    document.getElementById("mytotal").append(pTotal)
})