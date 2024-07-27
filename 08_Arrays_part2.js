
let num1 = [10, 20, 30, 40]
let num2 = [70, 80, 90, 100]
let num3 = [100, 20, 30, 78]

let arrayJodo = [...num1, ...num2, ...num3]   // arrays ka concatination
console.log(arrayJodo);

let nestArray = new Array(1, 2, 3, [25, 26, [97, 98], true], 78, false, {})
console.log(nestArray.flat(Infinity));  // nested arrays ko simple array bnaya

console.log(Array.from("India is a great country"));  // isse array bnao
console.log(Array.isArray(num1));  // kya ye array hai?

let m1 = 98
let m2 = 97
let m3 = 78
console.log(Array.of(m1, m2, m3));  // in sabka ek array bnao