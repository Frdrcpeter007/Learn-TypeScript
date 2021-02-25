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


//Enum
enum RessourceType {FILM, SERIE, MERDE, CON}

interface Resource <T> {
    uid: Number,
    ressourceType: RessourceType,
    data: T
}

let docOne: Resource<Object> = {
    uid: 34,
    ressourceType: RessourceType.FILM,
    data: {title: "La fleur de l'âge"}
}

let docTwo: Resource<Object> = {
    uid: 94,
    ressourceType: RessourceType.SERIE,
    data: {name: "Merlin l'enchanteur"}
}

console.log(docOne);
