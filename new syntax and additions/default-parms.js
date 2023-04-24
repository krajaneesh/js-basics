function isEqualTo(number, compare=number){
    console.log(number);
    console.log(compare);
    return number == compare;
}

console.log(isEqualTo(25));


function isEqual(number, compare=25){
    console.log(number);
    console.log(compare);
    return number == compare;
}

console.log(isEqual(10));
