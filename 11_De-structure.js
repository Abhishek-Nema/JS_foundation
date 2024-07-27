
// defining an object "user"
let user = {
    name: "Anant",
    age: 27,
    company: "jio"
}

// reassiging age property of user
user.age = 30

// de-structuring object
const { name: naam, age: umar } = user

// print the result
console.log(`Name of user is: ${naam}, age: ${umar}`);
