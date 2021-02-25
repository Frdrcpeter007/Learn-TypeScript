import { Invoice } from './classes/Invoce.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payments.js';
let form = document.querySelector('.new-item-form');
//Input
let type = document.querySelector("#type"), tofrom = document.querySelector("#tofrom"), details = document.querySelector("#details"), amount = document.querySelector("#amount"), container = document.querySelector(".item-list"), item = new ListTemplate(container);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc, heading;
    if (type.value === 'invoice') {
        heading = 'Facture d\'achat';
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        heading = 'Payement';
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    item.render(doc, heading, 'end');
});
//Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc = addUID({ name: 'Peter', age: 34 });
console.log(doc);
console.log(doc.name);
let docThree = {
    uid: 34,
    ressourceName: "Me",
    data: new Invoice("ABC", "Hmmmmm", 450)
};
console.log(docThree.data.format());
