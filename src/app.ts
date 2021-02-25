import { Invoice } from './classes/Invoce.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

let form = document.querySelector('.new-item-form')! as HTMLFormElement;

//Input
let type = document.querySelector("#type") as HTMLSelectElement,
    tofrom = document.querySelector("#tofrom") as HTMLInputElement,
    details = document.querySelector("#details") as HTMLInputElement,
    amount = document.querySelector("#amount") as HTMLInputElement,
    container = document.querySelector(".item-list") as HTMLUListElement,
    item = new ListTemplate(container);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter,
        heading: "Facture d'achat" | "Payement",
        values: [string, string, number];

        values = [tofrom.value, details.value, amount.valueAsNumber];

    if (type.value === 'invoice') {
        heading = 'Facture d\'achat';
        doc = new Invoice(...values)
    } else {
        heading = 'Payement';
        doc = new Payment(...values)   
    }
    

    item.render(doc, heading, 'end')

})


//Tuples
let tup: [string, number];

tup = ["33", 33];

console.log(tup);

