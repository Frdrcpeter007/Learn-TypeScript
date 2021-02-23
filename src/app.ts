interface isPerson {
    name: string,
    age: number,
    speak(a: string): void;
}

let me: isPerson = {
    name: 'Peter',
    age: 39,
    speak(text: string): void {
        console.log(text);
    }
}

me.speak("Ta guele");


import { Invoice } from './classes/Invoce.js';

let invOne = new Invoice("Peter NDENGO", "Développer un site web", 500),
    invTwo = new Invoice("Jonas NDENGO", "Créer une maquette maison", 630),
    invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices)

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