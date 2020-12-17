//do this first
class Employee {
    constructor(id, email) {
        this.id = id;
        this.email = email;
        this.name = name;
    }

    * getName()
    * getId()
    * getEmail()

    getRole() {
        return "Employee"
    }//get role returns a string which is 'Employee'
}

class Manager extends Employee {

    //how to method overrride 
    constructor(id, email, name, officeNumber) {
        super(id, email, name); //this info is getting from my employee object using super
        this.officeNumber = OfficeNumber;// this is referencing only the Manager section

    }
    getRole() {
        return "Manager";
    }

}
const Manager = new Manager(100, "sue@gmail.com", "Susan", 100);
console.log(manager.getRole()); //this get role is refering to line
//26 get role because it has been overridden



//employee
class Engineer extends Employee {

    //how to method overrride 
    constructor(id, email, name, github) {
        super(id, email, name); //this info is getting from my employee object using super
        this.github = github;
    }
    getRole() {
        return Engineer;
    }
}
