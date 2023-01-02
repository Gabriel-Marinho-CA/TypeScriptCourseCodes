"use strict";
// 1 - exemplo decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    console.log("Iniciando decorator");
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class myClass {
    test() {
        console.log("Terminando execucao do metodo");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "test", null);
const myObj = new myClass();
myObj.test();
// 2 - multiplos decorators 
function a() {
    return function (target, propertKey, descriptor) {
        console.log("Executou a");
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log("Executou b");
    };
}
class MultDecorators {
    // ORDEM DO ULTIMO AO PRIMEIRO
    test() {
        console.log("Terminando exec");
    }
}
__decorate([
    a(),
    b()
], MultDecorators.prototype, "test", null);
const multiple = new MultDecorators();
multiple.test();
// 3 - class Decorator
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name == "User") {
        console.log("Criando usuario!");
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
}
const User1 = new User("gabriewl");
console.log(User1);
// 4 - Method Decorator
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `Maquina: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const myChine = new Machine("Torvod");
myChine.showName();
// 5 - acessor decorators
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const charmander = new Monster("Charmander", 90);
const charizard = new Monster("Chuarizard", 80);
console.log(charmander);
// 6 - property Decorator
function formatNumber() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const myId = new ID("60");
console.log(myId);
console.log(myId.id);
// 7 - Class Decorator real ex
// Função que insere data de criação dos objetos;
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(12);
const newPen = new Pen(9);
console.log(newPen.createdAt);
console.log(newBook);
// 8 - Method decorator real ex -- see if user are enable to do something
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuario já postou");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do user: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro post", newPost.alreadyPosted);
newPost.post("Meu Segundo post", newPost.alreadyPosted);
// 9 - Property Decorator real EX
function MaxCharAt(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log("Valor máximo atingido: " + limit);
                return;
            }
            else {
                console.log("Usuario Cadastrado: " + newVal);
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(userName) {
        this.userName = userName;
    }
}
__decorate([
    MaxCharAt(10)
], Admin.prototype, "userName", void 0);
const newUser = new Admin("GabrielAdmin");
const joao = new Admin("joaoadmin");
