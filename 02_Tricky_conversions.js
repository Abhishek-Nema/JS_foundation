
// #avoid these type of tricky operations, these are not easily readable

let n1 = 2 + 3 + "5"
let n2 = "2" + 3 + 5
console.log(n1);
console.log(n2);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);
/* here we did >= means null converted into 0, hence it prints true
== and > works differnetly with null */

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);

console.log(true>=2);
console.log("2" > 1);
