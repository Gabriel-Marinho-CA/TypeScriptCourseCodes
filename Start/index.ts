
// TIPOS

// tipos mais comum de declaracao de variavel
let x: number = 5;
let y:[] = [] 
let z: number[] = [] 
let h: any = ["ola",3] // qualquer tipo

// Objetos e array

const ls: {q:number,w:number} = {
    q:3,
    w:2
}

const sl:String[] = ["OLA", "OLA", "OLA", "OLA"];
const arr: Array<number>= [3]

// Operador não obrigatorio, ou seja nao e obrigatorio ter aquele elemento ("?")

const lls: {ft:number,tf?:object} = {
    ft:3
}

// Funco 
function parametros(x:number,y:string) {
}

//tipo de retorno da funcao
function parametrosReturn(x:number,y:string): string {
    return "oi"
}

// Props opcionais
function opcionais(a:number,b?:string) {
    console.log(a);
    
}
opcionais(3);


// Validando argumento opcional

function advancedGreeting (fName:string,lName?:string) {
    if(lName !== undefined) {
       return console.log("ola",fName,lName);
        
    }
   return console.log("Ola",fName);
    
}

advancedGreeting("Gabriel","marinho");

advancedGreeting("Gabriel");

console.log("===============");

// Union Type

function showBalanca(balance: string | number) {
    return console.log( `\nO saldo final é ${balance}`);

}
showBalanca(100);
showBalanca('500');

const arr2: Array<number | string | boolean> = [1,"teste",true];

console.log("===============");

const showUserRole = (role:boolean | string) => {
    if(typeof role === 'boolean') {
        return console.log("User not aproved"); 
    }
    return console.log("User role is",role);
    
}

showUserRole(false);
showUserRole("Admin");

console.log("===============");

// Type alias

type ID = string | number

// o tipo que o id é string e number
function showId(id:ID) {
    console.log(id);
    
}
showId("ola sou string");
showId("ola sou number")

console.log("===============");

//  Interfaces

interface Point {
    PointX:number,
    PointY:number,
    PointZ:number
}

function showCoords (obj:Point) {
    console.log(`X: ${obj.PointX} Y: ${obj.PointY} Z: ${obj.PointZ}`);
}

const coordObj:Point = {
    PointX:10,
    PointY:15,
    PointZ:30
}

showCoords(coordObj);

console.log("===============");


// Interface x Alias = O interface pode ser alterado ao longo do código, já o Alias não


// Acrescentando na interface
interface Person {
    name:String
}

interface Person  {
    age:Number
}

const somePerson: Person = {name:"Gab",age:19};

// Não da pra acerscentar 

type persontType = {
    name:string
}
// type persontType = {
//     age:Number
// }

// Literal Types

function showDirection(direction: "left" | "right" | "center") {
    console.log( `A direcao é ${direction}`);
}

showDirection("left");
// showDirection("up"); // Restringiu os valores para aceitar apenas os 3 


// Non-null Assertion Operator ("!") = È algo que a gente sabe que ta lá mas o TS nao consegue identificar 

let p  = document.getElementById("algumP");
console.log(p!.innerText);


console.log("===============");

//Symbol valores de variaveis unicas mesmo quando 2 var possuem mesmo valor

let symbolA = Symbol("a")
let symbolB: Symbol = Symbol("a")

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
