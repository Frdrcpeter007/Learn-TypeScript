let me = {
    name: 'Peter',
    age: 39,
    speak(text) {
        console.log(text);
    }
};
me.speak("Ta guele");
import { Invoice } from './classes/Invoce.js';
let invOne = new Invoice("Peter NDENGO", "Développer un site web", 500), invTwo = new Invoice("Jonas NDENGO", "Créer une maquette maison", 630), invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
let form = document.querySelector('.new-item-form');
//Input
let type = document.querySelector("#type"), tofrom = document.querySelector("#tofrom"), details = document.querySelector("#details"), amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let invoice = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    invoices.push(invoice);
    console.log(invoices.map((value) => value.format()));
});
