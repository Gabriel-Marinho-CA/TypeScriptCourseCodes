"use strict";
// VOID
function withouthReturng() {
    console.log("Esta funcao nao tem retorno");
    //return 1;
}
withouthReturng();
// 2 - callback como argumento~
function greeting(name) {
    return `Ola ${name}`;
}
function preGreeting(f, userName) {
    console.log("preparando a funcao");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "gabrieol");
// 3 - Generic functions <T> generic
function firstElementArray(arr) {
    return arr[0];
}
console.log(firstElementArray([1, 2, 3]));
console.log(firstElementArray(["a", "b", "c"]));
function mergeObject(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObj = mergeObject({ name: "Gabriel" }, { idade: 21 });
console.log(newObj);
// 4 - Constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("6", "5"));
// 5 - specificar tipo de argumento
// Quando usamos generic function com 1 parametro generio o TS só aceita o parametro como sendo de mesmo tipo, dessa forma passando quais tipos de parametros nos aceitamos na chamada da funcao, ele aceita outros tipos genericos de dados.
function mergeArray(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArray([1, 2, 3], ["2", "3"]));
console.log(mergeArray([1, 2, 3], [3, 4]));
// 6 - Parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Salve ${name} ${greet}`;
    }
}
console.log(modernGreeting("Gabriel"));
console.log(modernGreeting("Pedro", "JR"));
// 7 - Parametro Default
function somaDefault(n1, n2 = 10) {
    return n1 + n2;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 15));
// 8 - unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X e um numero");
    }
}
console.log(doSomething(1));
console.log(doSomething([3, 2, 3]));
// 9 - NEVER
function showErrorMsg(msg) {
    throw new Error(msg);
}
//showErrorMsg("Erro de dados");
// 10 - Rest oeprator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5, 5, 6));
console.log(sumAll(123, 1529));
// 11 - Destructuring parametro
function showProductDetails({ name, price }) {
    return `Nome do produto ${name} e preço é ${price}`;
}
const shirt = { name: "Tshirt", price: 49.98 };
console.log(showProductDetails(shirt));
//console.log(showProductDetails({ name: "teste", age: 123 }));
