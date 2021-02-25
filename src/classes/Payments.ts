import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter{
    constructor(
        readonly recipient: string,
        private details: string,
        private amount: number
    ){}

    format(): string {
        return `${this.recipient} a payé ${this.amount}$ pour ${this.details}`
    }
}