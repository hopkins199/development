const people = [{"fname":"esme", "lname":"sanchez", "id":1892038, "isTherapist":true},

{"fname":"rick", "lname":"jeps", "id":1894024, "isTherapist":false},

{"fname":"angie", "lname":"lange", "id":1982403, "isTherapist":false},

{"fname":"renat", "lname":"gros", "id":1894039, "isTherapist":true},

{"fname":"bettino", "lname":"yang", "id":3789204, "isTherapist":true}]



const result = people.map(person => ({ first: person.fname, last: person.lname }))

function listPeople(arr) {
    for(let i = 0; i < arr.length; i++){
        const peopleList = document.createElement('div')
        peopleList.className += "pList"
        const peopleDiv = document.getElementById('peopleDiv')
        peopleDiv.appendChild(peopleList)
        const person = document.createElement('div')
        person.className += "person"
        peopleList.appendChild(person)
        const p1 = document.createElement('p')
        p1.textContent = arr[i].last + ","
        p1.className += "firstName"
        person.appendChild(p1)
        const p2 = document.createElement('p')
        p2.textContent = arr[i].first
        person.appendChild(p2)
    }
}

listPeople(result)