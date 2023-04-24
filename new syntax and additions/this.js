// 'this' in regular functions refers to the object which the function is invoked.
// 'this' in arrow functions refers to the object in which the function is defined.
function fn() {
    console.log(this);
}

fn();

var fn2 = () => console.log(this);
fn2();

//document is not defined - Node.js
//var button = docuemnt.querySelector('button');
button.addEventListener('click', fn);