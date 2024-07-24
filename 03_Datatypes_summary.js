
/* 
In JS Datatypes are of two types: primitive and non-primitive

Primitive datatypes -> Number , String , Boolean , null , undefined , Symbol , BigInt
Reference datatypes -> Array , Object , Function
 */

// Primitive datatypes
let num = 5.5
console.log(`Type of num : ${typeof num}`)

let bool = false
console.log(`Type of bool : ${typeof bool}`)

let str = "Hello world"
console.log(`Type of str : ${typeof str}`)

let nullValue = null
console.log(`Type of nullValue : ${typeof nullValue}`)

let undefinedValue = undefined
console.log(`Type of undefinedValue : ${typeof undefinedValue}`)

let symbolValue = Symbol('abc')
console.log(`Type of symbolValue : ${typeof symbolValue}`)

let bigNumber = 212481518581515515n
console.log(`Type of bigNumber : ${typeof bigNumber}`)

// Refrence datatypes
let myArr = ['batman', "235", 21, true, 135]
console.log(`Type of myArr : ${typeof myArr}`)

let myObj = {
    fName: "Vijay",
    mName: "Deenanath",
    lName : "chouhan",
    age : 56
}
console.log(`Type of myObj : ${typeof myObj}`)

let myFunc = function(){
    console.log("hey it's me, function");
}
console.log(`Type of myFunc : ${typeof myFunc}`)
