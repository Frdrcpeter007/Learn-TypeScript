"use strict";
//Classes
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " doit " + this.amount + "$ pour " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("Peter NDENGO", "Développer un site web", 500), invTwo = new Invoice("Jonas NDENGO", "Créer une maquette maison", 630), invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
var form = document.querySelector('.new-item-form');
//Input
var type = document.querySelector("#type"), tofrom = document.querySelector("#tofrom"), details = document.querySelector("#details"), amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var invoice = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    invoices.push(invoice);
    console.log(invoices);
});
