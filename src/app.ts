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
        heading: "Facture d'achat" | "Payement";

    if (type.value === 'invoice') {
        heading = 'Facture d\'achat';
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        heading = 'Payement';
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)   
    }
    

    item.render(doc, heading, 'end')

})


//Generics
const addUID = <T extends {name: String}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);

    return {...obj, uid}
}
let doc = addUID({name: 'Peter', age: 34});

console.log(doc);
console.log(doc.name);

//With Interface

interface Resource <T> {
    uid: Number,
    ressourceName: String,
    data: T
}

let docThree: Resource<HasFormatter> = {
    uid: 34,
    ressourceName: "Me",
    data: new Invoice("ABC", "Hmmmmm", 450)
}

console.log(docThree.data.format());
