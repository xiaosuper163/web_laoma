console.log("Hi node js!");
var a = 9;
console.log(++a);
console.error("123456");
console.log(Object.prototype);
console.time("123");
var sum = 0;
for (var i=0; i<10000; i++) {
    sum += i;
}
console.timeEnd("123");

function intervalFn() {
    console.log(Date())
}

// setInterval(intervalFn, 500);

let t = require("./02math.js");
console.log(t.add(3,4));