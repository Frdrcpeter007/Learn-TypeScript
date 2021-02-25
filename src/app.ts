import { Invoice } from './classes/Invoce.js';
import { Payment } from './classes/Payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// let invOne = new Invoice("Peter NDENGO", "Développer un site web", 500),
//     invTwo = new Invoice("Jonas NDENGO", "Créer une maquette maison", 630),
//     paidOne = new Payment("ABCD", "Developpement d'un site web", 340);
    let invoices: Invoice[] = [],
        payments: Payment[] = [];

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


let form = document.querySelector('.new-item-form')! as HTMLFormElement;

//Input
let type = document.querySelector("#type") as HTMLSelectElement,
    tofrom = document.querySelector("#tofrom") as HTMLInputElement,
    details = document.querySelector("#details") as HTMLInputElement,
    amount = document.querySelector("#amount") as HTMLInputElement,
    item = document.querySelector(".item-list") as HTMLDivElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)   
    }
    
    let p = document.createElement('p');
    p.innerHTML = doc.format();

    item.appendChild(p)
})