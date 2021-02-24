import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter{
    constructor(
        readonly client: string,
        private details: string,
        private amount: number
    ){}

    format(): string {
        return `${this.client} a payé ${this.amount}$ pour ${this.details}`
    }
}