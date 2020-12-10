//exercise 1
var Person = function(name, age){
    this.name=name;
    this.age=age;
    this.describe = function(){
        return this.name + ", " + this.age + " years old";
    }
}
var jack = new Person("Jack", 25);
var jill = new Person("Jill", 24);
console.log(jack.describe());
console.log(jill.describe());


//exercise 2

var person = {
    firstName : "John",
    lastName : "Smith",
    age : 23
};

function printFullName()
{
    console.log(this.firstName + " " + this.lastName);
}

function printDetails()
{
    console.log(this.firstName + " is " + this.age + " years old");
}

// TODO: create bound copies of printFullName and printDetails.
var boundPrintFullName = printFullName.bind(person);
var boundPrintDetails = printDetails.bind(person);

boundPrintFullName();
boundPrintDetails();

//exercise 3

var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

// TODO: create the class Teacher and a method teach
var Teacher = function() {
    this.teach = function(subject){
        console.log(this.name + " is now teaching " + subject);
    }
}
Teacher.prototype = new Person();
var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");


