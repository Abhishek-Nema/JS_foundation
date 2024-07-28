
// creating a simple function "greet"
function greet(name) {
    return `Good evening ${name} `
}

console.log(greet("abhi"))

// creating a function which add three numbers, if arguments not given then it will use default args
function addThreeNumbers(n1=10, n2 = 6, n3 = 3) {

    // adding three values
    result = n1 + n2 + n3

    // using isNan() to check if value is NaN or True or anything but not a number
    if (isNaN(NaN)) {
        console.log('Please enter some number');
        return
    }

    // yeh return statement tab execute hoga jab if cond. false hogi
    return result
}

// return value ko "res" me save kiya
let res = addThreeNumbers("5")

// print res
console.log(`Result: ${res}`);
