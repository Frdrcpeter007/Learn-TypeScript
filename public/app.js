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
