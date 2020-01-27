Data structures are collections of values, the relationships among them, and the function or operations that can be applied to data

Different data structures excel at different things. Some are highly specialized, 
while some others( like arrays) are more generally used.


*** JavaScript ***

Class - A blueprint for creating objects with pre-defined properties and methods

Javascript doesn't really have classes. It's a syntheticial sugar over JavaScripts existing
prototype-based inheritance. The class syntax does not introduce a new object-oritented model to JavaScript

In Javascript, Data Structures are implemented as classes

class Student{
    constructor(firstName, lastName){
        this.firstNAme = firstName;
        this.lastName = lastName;
    }
}

The method to create new objects must be called a constructor

The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well

To instantiate a new class, use the 'new' keyword

let firstStudent = new Student("Colt "Steele")
let secondStudent = new Student("Blu "Steele")

We create class methods by using the static keyword inside of our class object.