const employees = []

function Employee(name, jobtitle, salary, status){
    this.name = name
    this.jobtitle = jobtitle
    this.salary = salary
    this.status = "full time"
    this.printEmployeeForm = function(){
        console.log(this.name, this.jobtitle, this.salary, this.status)
    }
}


var velma = new Employee("Velma", "CEO", "280,000 yearly")
var fred = new Employee("Fred", "Sales Manager", "75,000 yearly")
var shaggy = new Employee("Shaggy", "Custodian", "21.00 Hourly", "Part Time")

velma.printEmployeeForm()
var newEmployees = employees.push(velma)
fred.printEmployeeForm()
var newEmployees = employees.push(fred)
shaggy.printEmployeeForm()
var newEmployees = employees.push(shaggy)
console.log(newEmployees)