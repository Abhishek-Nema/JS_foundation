
// defining a simple object
let myObj = {
    username: "Abhi",
    age: 27,

    greetMsg: function () {
        console.log(`Hi ${this.username}`);
        console.log(this);
    }
}

console.log(myObj.greetMsg());


// checking how "this" works in regular functions and arrow functions
function func1() {
    console.log(`Hi user`);
    console.log(this);
}

func1()

let func2 = () => {
    console.log("Hi");
    console.log(this);
}

func2()

// ye hai ek arrow function
let addNum = (n1, n2) => {
    return n1 + n2
}

console.log((addNum(5, 6)))

// arrow function with implicit return
let addNewNum = (n1, n2) => (n1 + n2)

console.log((addNewNum(50, 6)))

// testing the implicit retrun of arrow function
let logObject = () => ({ fname: "sammy", lname: "raina" })

console.log(logObject());