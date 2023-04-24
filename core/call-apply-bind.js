//call, apply and bind methods are used to assign an object to the this keyword

let person = {
    firstName: 'Steve',
    lastName: 'Jobs',
    fullName(){
        return this.firstName + " " + this.lastName;
    }
}

const SRUJAN = {
    firstName: 'Srujan',
    lastName: 'Kosuri'
}

const SUHAS = {
    firstName: 'Suhas',
    lastName: 'Kosuri'
}

// first argument is the object being assigned to the this keyword
console.log(person.fullName.call(SRUJAN));
console.log(person.fullName.call(SUHAS));

// ##############

let greetingBad = (a, b) => {
    return `${a} ${this.firstName} ${this.lastName} ${b}`;
}  // backticks are ES6 feature that allows to create Strinsg easily without + operators

// Does not work because this in arrow function = this in the context where function is displayed
console.log(greetingBad.call(SRUJAN, "Hello", "How are you?"));

let greeting = function(a,b){
    return `${a} ${this.firstName} ${this.lastName}, ${b}`;
}

console.log(greeting.call(SRUJAN, 'Hello', "how are you"));
