const formAdd = document["add"]

let addy = document.getElementById("addButt").addEventListener("click", function(event){
    event.preventDefault()
    let addBox1 = formAdd.firstNumA.value
    addBox1 = parseInt(addBox1)
    let addBox2 = formAdd.secNumA.value
    addBox2 = parseInt(addBox2)
    let calc1 = addBox1 + addBox2 
    formAdd.firstNumA.value = ""
    formAdd.secNumA.value = ""
    let h3Add = document.createElement('h3')
    h3Add.id = "answerAdd"
    h3Add.textContent = calc1
    document.getElementById("add1").append(h3Add)
})

const formSub = document["sub"]

let subby = document.getElementById("subButt").addEventListener("click", function(event){
    event.preventDefault()
    let subBox1 = formSub.firS.value
    subBox1 = parseInt(subBox1)
    let subBox2 = formSub.secS.value
    subBox2 = parseInt(subBox2)
    let calc2 = subBox1 - subBox2
    formSub.firS.value = ""
    formSub.secS.value = ""
    let h3Sub = document.createElement("h3")
    h3Sub.id = "answerSub"
    h3Sub.textContent = calc2
    document.getElementById("sub1").append(h3Sub)
    console.log(subBox1, subBox2, calc2)
})

const formMul = document["mul"]

let mully = document.getElementById("mulButt").addEventListener("click", function(event){
    event.preventDefault()
    let mulBox1 = formMul.firM.value
    mulBox1 = parseInt(mulBox1)
    let mulBox2 = formMul.secM.value
    mulBox2 = parseInt(mulBox2)
    let calc3 = mulBox1 * mulBox2
    formMul.firM.value = ""
    formMul.secM.value = ""
    let h3Mul = document.createElement("h3")
    h3Mul.id = "answerMul"
    h3Mul.textContent = calc3
    document.getElementById("multiply").append(h3Mul)
})
