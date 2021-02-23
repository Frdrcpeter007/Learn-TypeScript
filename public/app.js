"use strict";
// let anchor = document.querySelector('a');
// console.log(anchor?.href);
var form = document.querySelector('.new-item-form');
//Input
var type = document.querySelector("#type"), tofrom = document.querySelector("#tofrom"), details = document.querySelector("#details"), amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
