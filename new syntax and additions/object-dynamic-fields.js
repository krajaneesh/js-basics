let name = 'Sujju';
let age = 25;


// traditional way to create function in object
let obj1 = {
    name,
    age,
    greet: function (){
        console.log("Hi "+ this.name+". Your age is "+ this.age); 
    }
}
obj1.greet();

// shorthand way create function in a object
let obj2 = {
    name: 'Suha',
    age,
    greet(){
        console.log("Hi "+ this.name+". Your age is "+ this.age); 
    }
}

obj2.greet();


//declaring a field name based of a variable
//Dynamically create properties with names stored in variables and then reuse those variables to read the properties.
let ageFeild = 'age';

let obj = {
    name: "Raja",
    [ageFeild]: 35,

    "greet me"(){
        console.log("Hi "+ this.name+". Your age is "+ this.age); 
    }

}
console.log(obj);

obj["greet me"]();