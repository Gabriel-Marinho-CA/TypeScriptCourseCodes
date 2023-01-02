// 1 - importacao de funções/ arquivos

import importGreeting from "./greet";

console.log(importGreeting())


// 2 - importacao de variaveis

import { x } from "./variable";

console.log(x);


// 3 - multiplas importações

import { a, b, myF } from "./multiples";


console.log(a, b, myF());


// 4 - alias


import { someName as name } from "./changeName";


console.log(name);



// 5 - import all


import * as myNumbers from "./numbers";

console.log(myNumbers);

const nx1 = myNumbers.n1;

console.log(nx1);

myNumbers.anotherNumber();

const bigN = myNumbers.default();

console.log(bigN);


// 6 - importando tipos

import { Human } from "./myType";

class User implements Human {
    name;
    age;

    constructor(name:string,age:number) {
        this.name = name;
        this.age = age
    }
}


const UserAdmin = new User ("Admin",60);

console.log(UserAdmin);





