// declaring and defining the Symbol
let mySym = Symbol("^")

// creating an object user
let user = {
    user_name: "Abhishek",
    age: 24,
    full_name: {
        fname: "Abhishek",
        lname: "Nema"
    },
    "city": "Bangalore",
    id: Symbol("&"),
    [mySym] : "symbol hai"
}

// reassigning some properties of user object
console.log(user.age)
console.log(user["city"])
user.age = 21

// object freeze ho gya, nye changes nhi honge
// Object.freeze(user)  

// freeze hone ke kaaran ye changes nhi hue
// user.age = 23  
console.log(user)

// method add kar rha object me
user.greet = function () {
    console.log(`Hello ${this.full_name.fname}, have a good day`)
}

console.log(user.greet())
console.log(user)
