// 1-  tipo de objeto para funcao com interface

interface Product {
    name: String,
    price: Number,
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    console.log(`${product.name} -- ${product.price} -- ${product.isAvailable ? "produto disponivel" : "produto nao disponiuvel"}`);

}

const shirt: Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
}

showProductDetails(shirt);
showProductDetails({ name: "Tenis", price: 29.99, isAvailable: false });


// 2 -  Propriedades opcionais em interfaces

interface User {
    email: string,
    role?: string
}


function showUserProductDetails(user: User) {
    console.log(`Email do user : ${user.email} ${user.role ? "A funcao é: " + user.role : "Não tem funcao"}`);

}

const userGab:User = {
    email: "gab@gab.com.br"
}
const userAdmin:User = {
    email: "admin@admin.com.br",
    role: " administrador"
}
showUserProductDetails(userGab);
showUserProductDetails(userAdmin);

// 3  - ReadOnly

interface Car {
    brand: string,
    readonly wheels: number
}

const fusca:Car = {
    brand: "VW",
    wheels:4
}

console.log(fusca);

// fusca.wheels = 5;


// 4 - Index Signature

interface CoordObject {
    // O nome da propriedade é do tipo string e o valor é do tipo number
    [index:string]: number
}

const coords: CoordObject = {
    x: 10
}


coords.y = 15;

//coords.z = "15";

console.log(coords);


// 5 - Extending interfaces

interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const gabriel: Human = {
    name:"Gabriel",
    age: 20
}

const Goku : SuperHuman = {
    name:"Goku",
    age:999,
    superpowers: ["Kamehameha","kayoken"]
}

console.log(gabriel);
console.log(Goku);


// 6 - intersection types

interface Character {
    name: string
}

interface Gun {
    type: string,
    caliber: number
}


type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "shotgun",
    caliber: 12
}

console.log(arnold);
