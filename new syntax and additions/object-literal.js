let name = 'Srujan';
let age = 15;

let obj = {
    name,
    age
}

console.log(obj);

let obj1 = {
    "name" : 'Suhas',
    age 
}

console.log(obj1);


let obj2 = {
    name: 'Raja',
    age,

    greetMe(){
        console.log("Hi "+ this.name+". Your age is "+ this.age);
    }
}

obj2.greetMe();


let obj3 = {
    name: 'Bujji',
    age: 40,

    "greet me"(){
        console.log("Hi "+ this.name+". Your age is "+ this.age);
    }
}

obj3["greet me"]();