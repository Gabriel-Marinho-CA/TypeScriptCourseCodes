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
