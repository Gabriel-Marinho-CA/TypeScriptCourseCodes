// 1 - Generics


// Aceita qualquer tipo de paramnetro
// O parametro é de qualquer tipo (T)
// O retorno é uma string

function showData<T>(arg: T): string {
    return `Oi dado : ${arg}`
}

console.log(showData("ola"));
console.log(showData(5));


// 2 - Constraint com generic

// Garante que 1 propriedade seja garantida no caso o objeto precisa ter a key name
function showPdpName<T extends { name: string }>(obj: T) {
    return `Nome do pdp: ${obj.name}`
}

const pdp1 = { name: "Camisa" };
const pdp2 = { name: "Carro Up", wheels:4, haveDoor: true };
// const pdp3 = { idade: 3 };

console.log(showPdpName(pdp1));
console.log(showPdpName(pdp2));
// console.log(showPdpName(pdp3));


// 3 - Generic com interface

interface OneObj<T,U, Q> {
    name: string,
    wheels: T,
    engine: U,
    color: Q
}

type Car = OneObj<number,number, string>
type Pen = OneObj<boolean,Boolean, string>

const myCar:Car = {
    name:"Fusca",
    wheels:4,
    engine: 2.0,
    color:"blue"
}

const myPen:Pen = {
    name:"Caneta Azul",
    wheels:false,
    engine: false,
    color: "Azul",
}

console.log(myCar);
console.log(myPen);


// 4 - Type Parameters


function getSomeKey<T, K extends keyof T>(obj: T, key: K):string {
    return `A chave está presente no objeto ${obj[key]}`;
}

const server = {
    kd:"2TB",
    ram:"32GB"
}

console.log(getSomeKey(server,'ram'));
// console.log(getSomeKey(server,'teste'));


// 5 - keyof type Operator

type character = { 
    name:string,
    age:number,
    hasDriveLicense: boolean
};

type C = keyof character;

function showCharName(obj: character, key: C):string {
    return `${obj[key]}`
}

const myChar: character = {
    name: "Gabriel",
    age: 20,
    hasDriveLicense:true
}

console.log(showCharName(myChar,"name"));
console.log(showCharName(myChar,"age"));


// 6 - TypeOf type operator, tipa a variavel de acordo com a variavel anterior( comparada );

const userName: string = "Gabriel";

const userName2: typeof userName = "joao";

type x = typeof userName;

const userName3: x = "pablo";


// 7 - indexed access types, cria um tipo baseado em uma chave

type Truck = {
    km:number,
    kg:number,
    desc: string
}

// Tipo de dado da chave km
type Km = Truck['km'];

const newTruck = {
    km:123456,
    kg:1000,
    desc:"Bom caminhao"
}


function showKm(km:Km) {
    console.log(`O veiculo tem a km de :${km}`);
}

showKm(newTruck.km);

const newCar = {
    km:5000,
    kg: 9999
}

showKm(newCar.km);

// 8 - Conditional expressinons Type

interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string;

const someVar:myType = 9;

type myTypeB = Teste extends {
    showNumber():number
}? string : boolean;

const someVar2:myTypeB = true;


// 9 - Template Literals Type

type testA = "text";

type CustomType = `Some ${testA}`;

const testing: CustomType = "Some text";
// const testing: CustomType = "Some text 2 ";

type a1 = "Testando";
type a2 = "Union";

type a3 = `${a1}` | `${a2}`;






