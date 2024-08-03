// topics covered: if_else if_else , truthy & fasly values , switch case , nullish coearcing operator ,  ternary operator  

// if_else if_else
const numb = 5

if (numb < 2) {
    console.log("less than 20")
}
else if (numb < 4) {
    console.log('less than 4')
}
else if (numb < 6) {
    console.log('less than 6')
}
else {
    console.log("less than 10")
}


// switch case
const companyName = "wipro"

switch (companyName) {
    case "bsl":
        console.log(`Company : Birlasoft`)
        break
    case "tcs":
        console.log("Company : Tata Consultancy Services")
        break
    case "infy":
        console.log("Company : Infosys")
        break
    default:
        console.log("Some other company")
}


// falsy: false , 0 , -0 , NaN, null, undefined , BigInt = 0n , ""
// truthy: true , integers , "0", "false" , " " , any string or character , [empty_array], {empty_object} , function(){}
const bigNumber = 0n
const negtiveZero = -0
const valueStr = ""
const empty_array = [1, 3]
const empty_object = { name: "thakur" }

if (bigNumber || negtiveZero || valueStr) {
    console.log("value is true")
}
else if (empty_array.length === 0 || Object.keys(empty_object).length === 0 || -55) {
    // this condition executing only bcoz of -55
    console.log("true value")
}
else {
    console.log("false value")
}


// Nullish coalescing operator
let a = 0
let b = 55

// Nullish coalescing handles null or undefined values
// The ?? operator only considers null and undefined as nullish values. Other falsy values like 0, "empty_string", and false are not considered nullish and won't trigger the default value.
let res1 = a ?? b
console.log(res1)

let res2 = "abc" ?? undefined
console.log(res2)

let res3 = "" ?? null
console.log(res3)


// ternary operator
let age = 18

let ageResult =
    age === 18 ? "age is 18" : age > 18 ? "age is more than 18" : "age is less than 18"
console.log(ageResult)
