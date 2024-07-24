
let str1 = "Australia-India"

let str2 = new String("Bharat-India")


// at() --> use to get character at particular index, similar to chatAt() but it's latest, here we can pass negative values too to get last char.

console.log(str2.charAt(3))
// charAt() --> use to get character at particular index, people are using it from a very long time

console.log(str2.charCodeAt(0))
// charCodeAt() --> takes the index nunber, gives the unicode value of letter on that index

str2.endsWith("ia")
console.log(str2.endsWith("ia"))
// endsWith() --> checks if searchString present in the end and gives boolean result

// startsWith() --> checks if searchString present in string in the beginning and gives boolean result

console.log(str2.includes("hara"))
// includes() --> checks if searchString present in string anywhere and gives boolean result

console.log(str2.indexOf("rat"))
// indexOf() --> gives the first occurance index number of searchString

console.log(str2.lastIndexOf("dia"))
// lastIndexOf() --> gives the last occurance index number of searchString

console.log(str2.repeat(3))
// repeat() --> repeats the string for the n times mentioned in function args 

let str3 = `India is a very big country
In India we all are family
India is the vishwaguru`
console.log(str3.replace("India", "Bharat"))
// replace() --> replaces only first occurance of searchString
console.log(str3.replaceAll("India", "Bharat"))
// replaceAll() --> replaces all occurances of searchString

console.log(str3.slice(1, 4))
// slice() --> do slicing part
