//Explicit type
let char: string;
let age: number;
let isLoggedIn: boolean;

//age = 'luigi'
age = 34

//Array
let ninjas: String[];

//ninjas = [23, 'abcd']
ninjas = ['Ken', 'Master']

//Union Type
let mixed: (string|number)[] = [];

//mixed.push(true)
mixed.push('Peter')
mixed.push(46)

let uid: number|string;

//uid = false;
uid = '123'


//Object
let ninjaOne: object;

ninjaOne = {name: 'abc', age: 22}
ninjaOne = []

let ninjaTwo: {uid: number|string, name: string, age: number, isDead: boolean};

ninjaTwo = {
    uid: "123",
    name: 'Peter',
    age: 99,
    isDead: false
}

console.log(ninjaTwo);
