// rest operator (...paramater) in action
function addProductPrice(...num) {
    return num
}

console.log(addProductPrice(200, 100, 300));

// creating an object "user"
let user = {
    name: 'abhi',
    age: 24
}

// passing some object to function
function objectDetails(anyObject) {
    return `The name of user is ${anyObject.name} and his age is ${anyObject.age}, ID: ${anyObject.id}`
}

// this will take "user" objects data
// let res = objectDetails(user)
// console.log(res);

// passing new values in arguments of func. objectDetails
let res = objectDetails(
    {
        name: "Manohar",
        age: 32,
        id: 221133
    }
)
console.log(res);

// ek array banai
let myArray = ['abhi', "niyu", 'ashish solanki']

// func. showArrayDetails me koi array pass kari
function showArrayDetails(someArray) {
    console.log(`second elm of array: ${someArray[1]}`);
}

// showArrayDetails(myArray)

// func. showArrayDetails ke arguments me nayi array pass kari di
showArrayDetails(["ranveer", "hitesh", "CodeWithHarry"])