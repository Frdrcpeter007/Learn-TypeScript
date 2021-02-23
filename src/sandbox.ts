//Example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

//Example 2
let calc: (a: number, b: number, c?: string) => number;

calc = (firstNumber: number, secondNumber: number, action?: String) => {
    if (action === 'add') {
        return firstNumber + secondNumber
    }

    return firstNumber - secondNumber
}

let result: number;

result = calc(23, 43);

console.log(result);

result = calc(34, 2, 'add')

console.log(result);

//Example 3
type person = { name: string, age: number}

//Signature
let log: (user: person) => void;

log = (ninja: person) => {
    console.log(`${ninja.name} have ${ninja.age} years old`);
}

log({name: 'John', age: 34})