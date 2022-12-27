"use strict";
// 1-  tipo de objeto para funcao com interface
function showProductDetails(product) {
    console.log(`${product.name} -- ${product.price} -- ${product.isAvailable ? "produto disponivel" : "produto nao disponiuvel"}`);
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tenis", price: 29.99, isAvailable: false });
function showUserProductDetails(user) {
    console.log(`Email do user : ${user.email} ${user.role ? "A funcao é: " + user.role : "Não tem funcao"}`);
}
const userGab = {
    email: "gab@gab.com.br"
};
const userAdmin = {
    email: "admin@admin.com.br",
    role: " administrador"
};
showUserProductDetails(userGab);
showUserProductDetails(userAdmin);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
const coords = {
    x: 10
};
coords.y = 15;
//coords.z = "15";
console.log(coords);
const gabriel = {
    name: "Gabriel",
    age: 20
};
const Goku = {
    name: "Goku",
    age: 999,
    superpowers: ["Kamehameha", "kayoken"]
};
console.log(gabriel);
console.log(Goku);
const arnold = {
    name: "Arnold",
    type: "shotgun",
    caliber: 12
};
console.log(arnold);
// 7 - ReadOnlu array - nao é possivel alterar o conteudo ( apenas por metodos)
let arr = ["coco", "maca", "mamao"];
// arr[2] = "banana";
arr = arr.map((item) => {
    return `Fruta: ${item}`;
});
console.log(arr);
const myNumber = [
    1, 2, 3, 4, 5
];
const people = ["gabriel", 120];
people[0] = "joao";
// people[1]="joao";
console.log(people);
// 9 - Tuplas + readOnly = tipo de dado muito restrito
function showNumber(numbers) {
    numbers.forEach(el => console.log(el));
}
showNumber([1, 6]);
