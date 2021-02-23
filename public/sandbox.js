"use strict";
var greet;
//greet = 'hello';
greet = function () {
    console.log("Hello world !");
};
var add = function (a, b, c) {
    if (c === void 0) { c = 100; }
    console.log(a + b);
    console.log(c);
};
add(3, 98);
var minus = function (a, b) {
    return a - b;
};
var result = minus(30, 21);
console.log(result);
