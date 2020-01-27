/* The method to create new objects must be called a constructor

The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well

To instantiate a new class, use the 'new' keyword

let firstStudent = new Student("Colt "Steele")
let secondStudent = new Student("Blu "Steele")

We create class methods by using the static keyword inside of our class object.

We create a class method by using the static keyword. 
Static methods are called without instantiaing their class
and cannot be called through a class instance. Class methods 
are often used to create utility functions for an application.
*/

class Student{
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0
        this.scores = []
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
    static enrollStudents(...students){
        return "ENROLL STUDENTS"
    }
    markedLate(){
        this.tardies += 1
        if(this.tardies >= 3){
            return 'You are expelled';
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScores(score){
        this.scores.push(score)
        return this.scores;
    }
    calculateAverage(){
        let sum = this.scores.reduce((a,b) => a + b)
        return sum/this.scores.length;
    }
}

let firstStudent = new Student("Colt", "Steele",12)
let secondStudent = new Student("Blu", "Steele",4)

console.log(firstStudent.addScores(92));

