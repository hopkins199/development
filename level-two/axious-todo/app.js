// get data from API

function getData(){
    axios.get("https://api.vschool.io/drewhopkins/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

// Display the To-Dos in the DOM

function listData(data){
    clearList()
    
    for(let i = 0; i < data.length; i++){
        const todoId = data[i]._id
        const div = document.createElement('div')
        div.id = "id"
        div.class = "conatiner"
        document.getElementById('todo-list').appendChild(div)
        const imgrr = document.createElement('img')
        imgrr.id = "pics"
        imgrr.src = data[i].imgUrl
        document.getElementById('id').appendChild(imgrr)
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        h1.id = "title"
        document.getElementById('id').appendChild(h1)
        const description = document.createElement('p')
        description.id = "description"
        description.textContent = data[i].description
        document.getElementById('id').appendChild(description)
        const h3price = document.createElement('p')
        h3price.id = "price"
        h3price.textContent = 'What will it Cost: ' + data[i].price
        document.getElementById('id').appendChild(h3price)
        // Delete Button
        const button1 = document.createElement('button')
        button1.innerHTML = "Delete"
        document.getElementById("id").appendChild(button1)
        button1.addEventListener('click', function deleteToDo(event){
            event.preventDefault();
            let id = event.target.parentElement.id
            axios.delete("https://api.vschool.io/drewhopkins/todo/" + todoId)
                .then(response => { 
                    if (response.data.msg === 'Successfully deleted record') {
                        event.target.parentElement.remove();
                        getData()
                    }
                })
                .catch(error => console.log(error))
        })
        // checkbox
        const chckBox = document.createElement('input')
        chckBox.type = 'checkbox'
        chckBox.id = "completed"
        chckBox.value = "completed"
        chckBox.addEventListener('change', function (){
            //e.preventDefault()
            if(this.checked){
                h1.style.textDecoration = "line-through"
                h3.style.textDecoration = "line-through"
                h3price.style.textDecoration = "line-through"

                const update = {
                    completed: true
                }

                axios.put("https://api.vschool.io/drewhopkins/todo/" + todoId, update )
                .then(response =>{
                    alert(`${data[i].title} completed!`)
                  }) 
                  .catch(error => alert(error))
            }
        })

        const label = document.createElement('label')
        label.htmlFor = 'completed';
        label.appendChild(document.createTextNode('Complete'));
        const br = document.createElement('br');
        const container = document.getElementById('id');
        container.appendChild(chckBox);
        container.appendChild(label);
        container.appendChild(br);

    }
}

function clearList(){
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()


// Post new To-Do item

const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value
    }
    
    todoForm.title.value = ""
    todoForm.description.value = ""
    todoForm.price.value = ""
    todoForm.imgUrl.value = ""
    
    axios.post("https://api.vschool.io/drewhopkins/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})
