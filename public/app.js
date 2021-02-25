import { Invoice } from './classes/Invoce.js';
import { Payment } from './classes/Payments.js';
// let invOne = new Invoice("Peter NDENGO", "Développer un site web", 500),
//     invTwo = new Invoice("Jonas NDENGO", "Créer une maquette maison", 630),
//     paidOne = new Payment("ABCD", "Developpement d'un site web", 340);
let invoices = [], payments = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// payments.push(paidOne);
// console.log(invoices)
// console.log(payments);
// let docOne: HasFormatter,
//     docTwo: HasFormatter;
// docOne = new Invoice("Sael BATUTA", "Emmerdement", 300);
// docTwo = new Payment("Pascal ABEDI", "Oppps", 130);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
let form = document.querySelector('.new-item-form');
//Input
let type = document.querySelector("#type"), tofrom = document.querySelector("#tofrom"), details = document.querySelector("#details"), amount = document.querySelector("#amount"), item = document.querySelector(".item-list");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    let p = document.createElement('p');
    p.innerHTML = doc.format();
    item.appendChild(p);
});
