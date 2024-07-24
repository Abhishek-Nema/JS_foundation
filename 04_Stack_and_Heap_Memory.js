/* 
Stack memory (stores primitive datatypes)  -> gives the copy of original value, never modifies original data
Heap memory (stores reference datatypes)  ->  gives the refernce of original value, always modifies original data
*/

let firstHalfScore = 4
let secondHalfScore = firstHalfScore
console.log(secondHalfScore)

secondHalfScore = 3
console.log(`score in first half: ${firstHalfScore}`)
console.log(`score in second half: ${secondHalfScore}`)

let gameScore1 = {
    halfOne: 7,
    halfTwo: 6
}
console.log(`score of game 1 in half one: ${gameScore1.halfOne}`)

let gameScore2 = gameScore1
gameScore2.halfOne = 12
console.log(`score of game 1 in half one: ${gameScore1.halfOne}`)
console.log(`score of game 2 in half one: ${gameScore2.halfOne}`)

// ***********************************************
// playing with JS
console.log('***********************************************');

let fruitList1 = ["apple", "banana", "mango", "papaya"]
console.log(`fruit 1 in list1: ${fruitList1[0]}`);

let fruitList2 = fruitList1
fruitList2[0] = "yummy yummy strawberry"
console.log(`fruit 1 in list2: ${fruitList1[0]}`);
console.log(`fruit 1 in list1: ${fruitList1[0]}`);
