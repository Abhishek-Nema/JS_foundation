// basic counting print kar rhe 
for (let i = 1; i <= 10; i++) {
    console.log(i)
}


// outer loop for setting number range
for (let num = 1; num <= 5; num++) {
    console.log(`Table of ${num}`)

    // inner loop for printing table of number
    for (let j = 1; j <= 10; j++) {
        console.log(`${num} * ${j} = ${num * j}`);
    }
}


// continue & break ka jaadu
let jumpValue = 5;
let antimValue = 12;

for (let num = 0; num < 20; num++) {
    // continue will skip loop for "jumpValue" variable
    if (num === jumpValue) {
        console.log(`Maaf kar rha ${jumpValue} ko`);
        continue
    }
    // break will end loop for "antimValue" variable
    if (num === antimValue) {
        console.log(`Loop ko rook rha ${antimValue} se pehle`);
        break
    }
    console.log(`Num: ${num}`);
}

let numArray = [10, 20, 30, 40]
for( let i = 0; i<numArray.length; i++){
    console.log(`Element at index ${i}: ${numArray[i]}`);
}