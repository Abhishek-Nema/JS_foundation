
let numNumber = 0;
let strRes = String(numNumber)
// console.log(strRes)  
// console.log(typeof strRes)  // we can write (typeof strRes) or (typeof(strRes))

let boolRes = Boolean(numNumber)
// console.log(boolRes);
// console.log(typeof boolRes);

let strString = "abc"
let strNumRes = Number(strString)
// console.log(strNumRes);
// console.log(typeof strNumRes);

let strBoolRes = Boolean(strString)
// console.log(strBoolRes);
// console.log(typeof strBoolRes);  // here comes the concept of truthy and falsy

/* 
In JavaScript, values can be categorized as either "truthy" or "falsy." 
Truthy values evaluate to true in a boolean context, while falsy values evaluate to false.

 Here are some common examples:

Falsy Values...
false
0
"" (empty string)
null
undefined
NaN

Truthy Values...
All values that are not falsy, including:
Non-empty strings ("example", "0", "false")
Numbers other than 0 (both positive and negative)
Objects and arrays (even if they are empty)
true

When you pass a value to the Boolean constructor, it converts the value to a boolean based on whether it is truthy or falsy. */

let boolBoolean = true

let strBoolBoolean = String(boolBoolean)
// console.log(strBoolBoolean);
// console.log(typeof strBoolBoolean);

let numBoolBoolean = Number(boolBoolean)
// console.log(numBoolBoolean);
// console.log(typeof numBoolBoolean);

let mixedValue = "true123Abc"

let numMixedValue = Number(mixedValue)
console.log(numMixedValue);
console.log(typeof numMixedValue);

let strMixedValue = String(mixedValue)
console.log(strMixedValue);
console.log(typeof strMixedValue);

let boolMixedValue = Boolean(mixedValue)
console.log(boolMixedValue);
console.log(typeof boolMixedValue);




