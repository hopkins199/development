const form = document["addItem"]
form.addEventListener("submit" , function(event){
    event.preventDefault()
    const addFood = form.addFood.value
    form.addFood.value = ""

    const listDiv = document.createElement("div")
    const li = document.createElement("li")
    const edit = document.createElement("button")
    const del = document.createElement("button")
    li.textContent = addFood
    li.style.textAlign = "center"
    edit.textContent = "edit"
    edit.style.margin = "10px auto"
    del.style.margin = "10px auto"
    del.textContent = "X"
    document.getElementById("list").appendChild(listDiv)
    listDiv.appendChild(li)
    listDiv.appendChild(edit)
    listDiv.appendChild(del)

    del.addEventListener("click" , function(){
        li.textContent = " "
        edit.remove()
        del.remove()
    })
    // Extra Credit in progress
    //edit.addEventListener("click" , function(){
    //    li.remove()
    //    const form = doucment["editItem"]
    //})
})

