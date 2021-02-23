//Classes
class Invoice {

    constructor(
        readonly client: string,
        private details: string,
        private amount: number
    ) {}

    public format(): string {
        return `${this.client} doit ${this.amount}$ pour ${this.details}`
    }
}

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