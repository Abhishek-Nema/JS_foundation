// Sinlgeton object bnaya
let insta_user = new Object()

// adding some key-values to "insta_user" obejct
insta_user.username = "harry123"
insta_user.age = 25
insta_user.email = "harry@google.com"

// printing the object, that's simple
console.log(insta_user);

// creating a nested object
let user = {
    name: "john",
    live: {
        country: {
            city: "Delhi"
        }
    }
}

// throws an error as living not defined
// console.log(user.living.country.city); 

// "?" prevent the error, chaining
console.log(user.living?.country.city);

// concatination of object, just like we do in array
let newObj = { ...insta_user, ...user }
console.log(newObj);

// object ki keys print karta, array me rakhta
console.log(Object.keys(insta_user));

// object ki values print karta, array me rakhta 
console.log(Object.values(insta_user));

// check karta ki property hai ya nhi
console.log(insta_user.hasOwnProperty("email"));  