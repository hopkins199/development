const employees = []
class Employee {
    constructor(name, jobtitle, salary, status = "Full time") {
        this.name = name
        this.jobtitle = jobtitle
        this.salary = salary
        this.status = status
    }
}
const printEmployeeForm = () => {
    console.log(Employee)
}
let velma = new Employee("Velma", "CEO", "280,000 yearly")
let fred = new Employee("Fred", "Sales Manager", "75,000 yearly")
let shaggy = new Employee("Shaggy", "Custodian", "21.00 Hourly", "Part Time")
console.log(velma, fred, shaggy)