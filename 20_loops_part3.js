// topics covered:  Map , forEach loop

// Map concept: same keys not allowed, it will override it
let heroMap = new Map

// assigning key-value in Map
heroMap.set("name", "Iron Man")
heroMap.set("team", "Avengers")
heroMap.set('power', "Intelligence")
heroMap.set("team", "Doom's force")     // this line overrided "team": "Avengers"

// printing Map
console.log(heroMap);
console.log(`Give me power of ${heroMap.get("name")}: ${heroMap.get("power")}`);

// using for...of loop on Map
for (const [myKeys, myValues] of heroMap) {
    console.log(`the key is ${myKeys} and value is ${myValues}`);
}


// forEach loop hai na
let countryList = ["IN", "UK", "Fr", "AUS", "NZ"]

// chaho to aise karlo
countryList.forEach( function (item){
    // console.log(item);
} )

// ya phir aise
function cList(val){
    // console.log(`item: ${val}`);
}
countryList.forEach(cList)

// ya phir ye best hai
countryList.forEach( (item) => {
    // console.log(item);
} )


// using forEach loop in array which contains objects
let myCountry = [
    {
        state : "MP",
        capital: "Bhopal"
    },
    {
        state : "Goa",
        capital : "Panaji",
    },
    {
        state : "J&K",
        capital : "Srinagar"
    }
]

myCountry.forEach( (elm) => {
    console.log(`Capital of ${elm.state}: ${elm.capital}`);
} )
