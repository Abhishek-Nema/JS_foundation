
let heroList1 = ["Shaktiman", "Nagraj", "Chacha Choudhary"]
let heroList2 = ["Spiderman", "Iron Man", "Hulk"]

heroList1.pop()  // last element delete kar do
console.log(heroList1);

heroList1.push("Hero-Bhakti ki shakti", "Dholu", "Babli")  // aakhri me element(s) add kar do
console.log(heroList1);

heroList2.unshift("Captain Marvel")  // shuru me element(s) add kar do
console.log(heroList2);

heroList2.shift("Captain Marvel")  // shuru ka 0th element hta do
console.log(heroList2);

console.log(heroList2.includes("Spiderman"))

console.log(heroList2.join(" "));  // Array ke elements ko string me badal do

let myNum1 = [1, 2, 3, 4, 5, 6]
console.log(myNum1.slice(1, 4));  // normal slicing karna

let myNum2 = [10, 20, 30, 40, 50, 60]
// Syntax: splice("index_number", "element_delete_count", "add_New_Item1", "add_New_Item2", "add_New_Item3..." )
console.log(myNum2.splice(1, 4, "hundred", "two hundred"));  
console.log(myNum2);