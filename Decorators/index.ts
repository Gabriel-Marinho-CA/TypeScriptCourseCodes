// 1 - exemplo decorator


function myDecorator() {
    console.log("Iniciando decorator");
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {

        console.log("Executando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);


    }
}

class myClass {

    @myDecorator()
    test() {
        console.log("Terminando execucao do metodo");
    }
}

const myObj = new myClass();
myObj.test();



// 2 - multiplos decorators 


function a() {
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executou a");

    }
}
function b() {
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executou b");

    }
}

class MultDecorators {

    // ORDEM DO ULTIMO AO PRIMEIRO

    @a()
    @b()

    test() {
        console.log("Terminando exec");
    }
}

const multiple = new MultDecorators();
multiple.test();

// 3 - class Decorator


function classDec(constructor: Function) {
    console.log(constructor);

    if (constructor.name == "User") {
        console.log("Criando usuario!");
    }
}

class User {
    name

    constructor(name: string) {
        this.name = name;
    }
}


const User1 = new User("gabriewl");

console.log(User1);



// 4 - Method Decorator

function enumerable(value: boolean) {
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value;
    }
}

class Machine {

    name;

    constructor(name: string) {
        this.name = name
    }

    @enumerable(false)

    showName() {
        console.log(this);

        return `Maquina: ${this.name}`
    }
}

const myChine = new Machine("Torvod");

myChine.showName();

// 5 - acessor decorators

class Monster {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;

    }

    @enumerable(true)
    get showName() {
        return `Nome do monstro: ${this.name}`
    }

    @enumerable(false)
    get showAge() {
        return `Idade do monstro: ${this.age}`
    }
}



const charmander = new Monster("Charmander", 90);
const charizard = new Monster("Chuarizard", 80);


console.log(charmander);


// 6 - property Decorator
function formatNumber() {
    return function (target: object, propertKey: string) {
        let value: string;

        const getter = function () {
            return value;
        }

        const setter = function(newVal: string) {
            value  = newVal.padStart(5,"0");
        };

        Object.defineProperty(target,propertKey, {
            set: setter,
            get: getter
        })
    };
}

class ID {
    @formatNumber()
    id

    constructor(id: string) {
        this.id = id;
    }
}


const myId = new ID("60")
console.log(myId);
console.log(myId.id);


// 7 - Class Decorator real ex


// Função que insere data de criação dos objetos;

function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}

@createdDate
class Book {
    id;
    createdAt?:Date ; 

    constructor(id:number) {
        this.id = id;
    }
}

@createdDate
class Pen {
    id;
    createdAt?:Date ;  

    constructor(id:number) {
        this.id = id;
    }
}

const newBook = new Book(12);
const newPen= new Pen(9);

console.log(newPen.createdAt);
console.log(newBook);


// 8 - Method decorator real ex -- see if user are enable to do something

function checkIfUserPosted() {
    return function(
        target: Object,
        key: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        const childFunction = descriptor.value;
        console.log(childFunction);

        descriptor.value = function(...args:any[]) {
            if(args[1] === true) {
                console.log("Usuario já postou");
                return null;

            } else {
                return childFunction.apply(this,args)
            }

        }
        return descriptor;
    }
}

class Post {
    alreadyPosted = false;

    @checkIfUserPosted()
    post(content: string,alreadyPosted:boolean) {
        this.alreadyPosted = true;
        console.log(`Post do user: ${content}`);
        
    }
}

const newPost = new Post();
newPost.post("Meu primeiro post",newPost.alreadyPosted);
newPost.post("Meu Segundo post",newPost.alreadyPosted);


// 9 - Property Decorator real EX

function MaxCharAt(limit: number) {
    return function(
        target: Object,
        propertyKey: string
    ) {
        let value: string;

        const getter = function() {
            return value;
        }

        const setter = function(newVal: string ) {
            if(newVal.length > limit)  {
                console.log("Valor máximo atingido: "+limit);
                return;
            } else {
                console.log("Usuario Cadastrado: "+ newVal);
                
                value = newVal;
            }
        }

        Object.defineProperty(target,propertyKey, {
            get: getter,
            set: setter
        })
    }
}

class Admin {
    @MaxCharAt(10)
    userName;

    constructor(userName: string) {
        this.userName = userName;
    }
}


const newUser = new Admin("GabrielAdmin");
const joao = new Admin("joaoadmin");
 