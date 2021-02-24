import { Invoice } from './classes/Invoce.js';
import { Payment } from './classes/Payments.js';

let invOne = new Invoice("Peter NDENGO", "Développer un site web", 500),
    invTwo = new Invoice("Jonas NDENGO", "Créer une maquette maison", 630),
    paidOne = new Payment("ABCD", "Developpement d'un site web", 340),
    invoices: Invoice[] = [],
    payments: Payment[] = [];

invoices.push(invOne);
invoices.push(invTwo);

payments.push(paidOne);

console.log(invoices)
console.log(payments);


let form = document.querySelector('.new-item-form')! as HTMLFormElement;

//Input
let type = document.querySelector("#type") as HTMLSelectElement,
    tofrom = document.querySelector("#tofrom") as HTMLInputElement,
    details = document.querySelector("#details") as HTMLInputElement,
    amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let invoice = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    invoices.push(invoice);

    console.log(invoices.map((value) => value.format()));
    
    
})