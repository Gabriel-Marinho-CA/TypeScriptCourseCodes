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

// 7 - ReadOnlu array - nao é possivel alterar o conteudo ( apenas por metodos)

let arr: ReadonlyArray<String> = ["coco","maca","mamao"];

// arr[2] = "banana";

arr = arr.map((item) => {
    return `Fruta: ${item}`
}) 

console.log(arr);

// 8 - Tuplas - determina a quantidade de item eos tipos de elementos

type fiveNumber = [
    number,
    number,
    number,
    number,
    number
]

const myNumber:fiveNumber = [
    1,2,3,4,5
];

type NameAndAge = [string,number];

const people:NameAndAge =["gabriel",120];

people[0]="joao";
// people[1]="joao";
console.log(people);



// 9 - Tuplas + readOnly = tipo de dado muito restrito

function showNumber(numbers: readonly [number,number]) {
    numbers.forEach(el => console.log(el));
}

showNumber([1,6])



