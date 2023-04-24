var fn = () =>{
    console.log("fat arrow");
}
fn();

var fn1 = () => console.log("minimal fat arrow");

fn1();

var fn2 = () => 1+1;

console.log(fn2()); 

var fn3 = (a,b) => a+b;
console.log(fn3(5, 6));

var fn4 = a=> a + 10;
console.log(fn4(3)); 

setTimeout(() => console.log("Hello"), 2000);