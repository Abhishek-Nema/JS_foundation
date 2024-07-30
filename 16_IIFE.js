
// semi-colon lgana hi padega yahan
let a = 50;

// IIFE is used so that the var declared inside IIFE does not pollute global scope namespaces or global scope variables

// this is a named IIFE : Imediately Invoked Function Expression
(function one(name1) {
    console.log(`Hi one, ${name1}}`);
})('abhi');

// this is unnamed IIFE
((name2) => {
    console.log(`Hi two, ${name2}`);
})('samay');

// adding two numbers usig IIFE concept
( (num1, num2)=>{
    console.log(num1 + num2);
})(4, 6)

