"use strict";
// 1 - Generics
// Aceita qualquer tipo de paramnetro
// O parametro é de qualquer tipo (T)
// O retorno é uma string
function showData(arg) {
    return `Oi dado : ${arg}`;
}
console.log(showData("ola"));
console.log(showData(5));
// 2 - Constraint com generic
// Garante que 1 propriedade seja garantida no caso o objeto precisa ter a key name
function showPdpName(obj) {
    return `Nome do pdp: ${obj.name}`;
}
const pdp1 = { name: "Camisa" };
const pdp2 = { name: "Carro Up", wheels: 4, haveDoor: true };
// const pdp3 = { idade: 3 };
console.log(showPdpName(pdp1));
console.log(showPdpName(pdp2));
const myCar = {
    name: "Fusca",
    wheels: 4,
    engine: 2.0,
    color: "blue"
};
const myPen = {
    name: "Caneta Azul",
    wheels: false,
    engine: false,
    color: "Azul",
};
console.log(myCar);
console.log(myPen);
// 4 - Type Parameters
function getSomeKey(obj, key) {
    return `A chave está presente no objeto ${obj[key]}`;
}
const server = {
    kd: "2TB",
    ram: "32GB"
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Gabriel",
    age: 20,
    hasDriveLicense: true
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
// 6 - TypeOf type operator, tipa a variavel de acordo com a variavel anterior( comparada );
const userName = "Gabriel";
const userName2 = "joao";
const userName3 = "pablo";
const newTruck = {
    km: 123456,
    kg: 1000,
    desc: "Bom caminhao"
};
function showKm(km) {
    console.log(`O veiculo tem a km de :${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 9999
};
showKm(newCar.km);
const someVar = 9;
const someVar2 = true;
const testing = "Some text";
