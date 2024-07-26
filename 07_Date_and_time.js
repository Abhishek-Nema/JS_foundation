
// Date
let myDate = new Date()
console.log(myDate);  

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

let newDate = new Date("06-01-1976")
console.log(newDate.toLocaleString());

console.log(myDate.getMonth() + 1);

// play time
console.log(myDate.getDay());

// console.log(myDate.toLocaleString("default", {
//     weekday: "long",
//     timeZone: "Asia/Kolkata",
//     timeZoneName: "long"
// }))

console.log(myDate.toLocaleString("en-IN", {
    weekday: "long", // prints
    year: "numeric", // prints
    month: "long", // prints
    day: "numeric", // prints
    hour: "numeric", // prints
    minute: "numeric", // prints
    second: "numeric", // prints
    timeZoneName: "short", // prints
    timeZone: "Asia/Kolkata", // doesn't print
    locale: "en-IN", // doesn't print
    hour12: true, // doesn't print
    formatMatcher: "best fit" // doesn't print
  }))
  