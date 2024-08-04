// topics covered:  while loop , do...while loop , for...of loop , for...in loop

// while loop #1 program
let n = 1

while (n <= 5) {
    console.log(`n: ${n}`);
    n = n + 1
}

// while loop #2 program
let index = 0
let fruitList = ["mango", "apple", "banana", "papaya"]

while (index < fruitList.length) {
    console.log(`Value at index ${index}: ${fruitList[index]}`);
    index++
}

// do...while loop #1 program
let num = 6

do {
    console.log(num);
    num = num - 1
} while (num > 0);


// do...while loop #2 program
let indexNum = 0
let vegeiesList = ["tomato", "potato", "cucumber", "peas"]

do {
    console.log(`Vegetable at index${indexNum}: ${vegeiesList[indexNum]}`);
    indexNum = indexNum + 1
} while (indexNum < vegeiesList.length);


// using for...of loop on array
let numList = ["hero", "villian" , "guru", "aadmi"]

for (const elm of numList) {
    console.log(elm);
}

// using for...of loop on object
let myObj = {
    name: "abhi",
    age: 22,
    country: "IN"
}

// for (const item of myObj) {
//     console.log(item);
//     // this will throw an error as for...of loop don't work for Objects
// }

// using for...in loop on object
for (const key in myObj) {
   console.log(`key: ${key} and value: ${myObj[key]}`);  
}

// using for...in loop on array
for (const key in numList) {
    console.log(`At index:${key}, value is ${numList[key]} `);
}