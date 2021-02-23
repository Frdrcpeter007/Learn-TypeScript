"use strict";
//Example 1
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
//Example 2
var calc;
calc = function (firstNumber, secondNumber, action) {
    if (action === 'add') {
        return firstNumber + secondNumber;
    }
    return firstNumber - secondNumber;
};
var result;
result = calc(23, 43);
console.log(result);
result = calc(34, 2, 'add');
console.log(result);
//Signature
var log;
log = function (ninja) {
    console.log(ninja.name + " have " + ninja.age + " years old");
};
log({ name: 'John', age: 34 });
