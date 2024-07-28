// values outside { } are in global scope, can be accessed anywhere
//  values inside { } are in block scope, only accesible in that scope

let a = 1000
var b = 2000
const c = 3000

// block scope ko test kar rhe
if (true) {
    let a = 1
    var b = 2
    const c = 3
}

// "a" me value global scope se aa rhi
console.log(a);

// "b" me value block scope se aa rhi, that's why avoid "var" keyword
console.log(b);

// "c" me value global scope se aa rhi
console.log(c);