
let myNum = 5

let num = new Number(201.76587)
console.log(num.toFixed());  // kitna accurate chahiye bolo, par string me milega
console.log(num.toFixed(2));
console.log(typeof num.toFixed(2));

let amount = 1000000
console.log(amount.toLocaleString("en-IN"));  // Indian version me convert kar diya

console.log(num.toPrecision());  // mainly for scientifi notations

// fun excercise

let orderPrices = [25.99, 87.99, 78.99]
let sum = 0
for (let elm of orderPrices) {
    sum = sum + elm
}
console.log(`Final amount to pay before roundOff: ${sum.toFixed(2)}`);
console.log(`Final amount to pay after roundOff: ${sum.toFixed()}`);

// Math in JS
let newNum = new Number(25)
console.log(Math.PI.toFixed(2))  // pi ki value btata

console.log(`Age is ${Math.abs(-25)}`);  // converts -ve values into +ve

console.log(Math.pow(2, 5));  // 2 ki power bta rha

console.log(Math.round(3.6));  // nearst value me roundoff kar deta

console.log(Math.random()); // random number deta but between 0 and 1
let randValue = Math.random()
console.log(`Random value: ${randValue}`)
console.log((randValue * 10) + 1);  // random value 0.9 se upar lene ki ninja technique

// play time
// console.log("we will roll the dice");
// let minval = 1
// let maxVal = 6
// console.log(`Aaya: ${Math.floor(Math.random() * (maxVal - minval + 1) + minval)}`);
