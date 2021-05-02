var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
var query = document.querySelector;

function formAlert() {
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var vegan = form.elements["vegan"]
    var gluten = form.elements["gluten"]
    var paleo = form.elements["paleo"]

    const diet = []
    for(let i = 0; i < form.diet.length; i++){
            if(form.diet[i].checked){
                diet.push(form.diet[i].value)
            }
        }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}
submit.addEventListener("click", formAlert)