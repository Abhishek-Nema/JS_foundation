
// filter()
let numArray = [10, 78, 35, 65, 45, 55, 57, 61, 44, 32, 21]

let filterRes = numArray.filter((val) => {
    return val > 45 && val < 61
})
console.log(filterRes);

// map()
let anotherArray = [10, 20, 30, 40]
let mapResult = anotherArray.map((item) => item * 2)
console.log(mapResult);


// chaining karna
let studMarks = [
    {
        name: "stud1",
        marks: 35
    },
    {
        name: "stud2",
        marks: 32
    },
    {
        name: "stud3",
        marks: 35
    },
    {
        name: "stud4",
        marks: 31
    },
    {
        name: "stud5",
        marks: 32
    }
]

let res = studMarks.filter((studData) => studData.marks === 32)
                    .map((studData) => {
                            return studData.marks + 1
})
console.log(res);


// reduce()
let num = [1, 2, 3, 4, 5, 6]
let startvalue = 0

let result = num.reduce( function(accumulator, currentvalue){
    return accumulator + currentvalue
}, startvalue )
console.log(result);
