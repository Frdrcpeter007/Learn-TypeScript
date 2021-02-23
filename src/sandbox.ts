let greet: Function;

//greet = 'hello';

greet = () => {
    console.log("Hello world !");
    
}

const add = (a: number, b: number, c: number | string = 100): void => {
    console.log(a + b);
    console.log(c);   
}

add(3, 98)

const minus = (a: number, b: number): number => {
    return a - b
}

let result = minus(30, 21)
console.log(result);
