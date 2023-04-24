let numbers = [1,2,3,4,5];

let sumUp = (toAdd) => {
    let result = 0;
    for(let i=0; i<toAdd.length; i++){
        result += toAdd[i];
    }
    console.log("Sum is: "+ result);
}

sumUp(numbers);

// Rest parameter, like varargs in Java

let sumUp1 = (...toAdd) => {
    // Rest operator converts the multiple arguments being passed into an array
    console.log(toAdd);
    let result = 0;
    for(let i=0; i<toAdd.length; i++){
        result += toAdd[i];
    }
    console.log("Sum is: "+ result);
}

sumUp1(1,2,3);
sumUp1(100, 10, "20");
