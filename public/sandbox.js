"use strict";
var logDetails = function (uid, item) {
    console.log(item + " has " + uid);
};
var greet = function (user) {
    console.log(user.name + " have " + user.age + " years");
};
greet({ name: "Peter", age: 34, uid: "123" });
