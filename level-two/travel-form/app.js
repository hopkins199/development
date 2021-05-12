var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
var query = document.querySelector;

function formAlert() {
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var steak = form.elements["steak"]
    var fish = form.elements["chicken"]
    var checken = form.elements["chicken"]

    const diet = []
    for(let i = 0; i < form.diet.length; i++){
            if(form.diet[i].checked){
                diet.push(form.diet[i].value)
            }
        }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nThank you for choosing DC Airlines");
}
submit.addEventListener("click", formAlert)