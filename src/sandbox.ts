type StringOrNum = string | number;
type userModel = {name: string, age: number, uid: StringOrNum};

const logDetails = (uid: StringOrNum, item: string): void => {
    console.log(`${item} has ${uid}`)
}

const greet = (user: userModel): void => {
    console.log(`${user.name} have ${user.age} years`)
}

greet({name: "Peter", age: 34, uid: "123"})