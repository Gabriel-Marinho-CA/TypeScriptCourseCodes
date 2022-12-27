"use strict";
// TIPOS
// tipos mais comum de declaracao de variavel
let x = 5;
let y = [];
let z = [];
let h = ["ola", 3]; // qualquer tipo
// Objetos e array
const ls = {
    q: 3,
    w: 2
};
const sl = ["OLA", "OLA", "OLA", "OLA"];
const arr = [3];
// Operador não obrigatorio, ou seja nao e obrigatorio ter aquele elemento ("?")
const lls = {
    ft: 3
};
// Funco 
function parametros(x, y) {
}
//tipo de retorno da funcao
function parametrosReturn(x, y) {
    return "oi";
}
// Props opcionais
function opcionais(a, b) {
    console.log(a);
}
opcionais(3);
// Validando argumento opcional
function advancedGreeting(fName, lName) {
    if (lName !== undefined) {
        return console.log("ola", fName, lName);
    }
    return console.log("Ola", fName);
}
advancedGreeting("Gabriel", "marinho");
advancedGreeting("Gabriel");
console.log("===============");
// Union Type
function showBalanca(balance) {
    return console.log(`\nO saldo final é ${balance}`);
}
showBalanca(100);
showBalanca('500');
const arr2 = [1, "teste", true];
console.log("===============");
const showUserRole = (role) => {
    if (typeof role === 'boolean') {
        return console.log("User not aproved");
    }
    return console.log("User role is", role);
};
showUserRole(false);
showUserRole("Admin");
console.log("===============");
// o tipo que o id é string e number
function showId(id) {
    console.log(id);
}
showId("ola sou string");
showId("ola sou number");
console.log("===============");
function showCoords(obj) {
    console.log(`X: ${obj.PointX} Y: ${obj.PointY} Z: ${obj.PointZ}`);
}
const coordObj = {
    PointX: 10,
    PointY: 15,
    PointZ: 30
};
showCoords(coordObj);
console.log("===============");
const somePerson = { name: "Gab", age: 19 };
// type persontType = {
//     age:Number
// }
// Literal Types
function showDirection(direction) {
    console.log(`A direcao é ${direction}`);
}
showDirection("left");
// showDirection("up"); // Restringiu os valores para aceitar apenas os 3 
// Non-null Assertion Operator ("!") = È algo que a gente sabe que ta lá mas o TS nao consegue identificar 
let p = document.getElementById("algumP");
console.log(p.innerText);
console.log("===============");
//Symbol valores de variaveis unicas mesmo quando 2 var possuem mesmo valor
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
