// 1 - Campos em classe


// ! = Nao precisa instaciar valores para os atributos
class User {
    name!: String
    age!: number
}

const Gabriel = new User();

Gabriel.name = "Gabriel";

Gabriel.age = 20;

console.log(Gabriel);


// 2 - Constructor

class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const joao = new NewUser("joao", 232);
// const pedro = new NewUser(232);

console.log(joao);


// 3 - readonly


class Car {
    name
    readonly wheels = 4

    constructor(name: string) {
        this.name = name
    }
}

const fusca = new Car("Fusca");
fusca.name = "Camaro";

// fusca.wheels = 6;


console.log(fusca, fusca.wheels);


// 4 - heranca e super 


class Machine {
    name

    constructor(name: string) {
        this.name = name;

    }
}


const trator = new Machine("Trator");

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}


const destroyer = new KillerMachine("Destroyer", 5);

console.log(destroyer);

// 5  -  Methods

class Dwarf {
    name

    constructor(name: String) {
        this.name = name;
    }

    greeting() {
        console.log("Hey stranger");

    }
}

const jimmy = new Dwarf("Jimmy");

jimmy.greeting();
console.log(jimmy);


// 6 - this

class Truck {
    model
    hp

    constructor(model: string, hp: number) {
        this.model = model;
        this.hp = hp;
    }

    showDetails() {
        console.log(`Caminhao do modelo ${this.model} e tem ${this.hp}`);

    }
}


const volvo = new Truck("Volvo", 600);
volvo.showDetails();

console.log(volvo);



// 7 - getters - leem as prorps

class Person {
    name
    surname

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return this.name + " " + this.surname;
    }
}

const pablo = new Person("Pablo", "Andre");

console.log(pablo.name);

// como é um get chamamos como uma prop
console.log(pablo.fullName);



// 8 - Setter -  modificam valores

class Coords {
    x!: number
    y!: number

    set FillX(x: number) {
        if (x == 0) return;

        this.x = x;

        console.log("X inserido com sucesse");

    }
    set FillY(Y: number) {
        if (Y == 0) return;

        this.y = Y;

        console.log("Y inserido com sucesse");

    }

    get getCoords() {
        return `x = ${this.x} ; y = ${this.y}`
    }
}


const myCoords = new Coords();

myCoords.FillX = 15;
myCoords.FillY = 6;

console.log(myCoords.getCoords);



// 9 - implements

interface ShowTitle {
    itemTitle(): string
}

class BlogPost implements ShowTitle {

    title

    constructor(title: string) {
        this.title = title;
    }

    itemTitle() {

        return `O titulo do post é ${this.title}`
    }

}

const myBlog = new BlogPost("Branca de neve");

console.log(myBlog.itemTitle());


class BookSeller implements ShowTitle {
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return `O titulo do livro é : ${this.title}`
    }
}

const myBook = new BookSeller("A bela e a fera");

console.log(myBook.itemTitle());



// 10 - Override methods

class Base {
    someMethod() {
        console.log("Lorem ipsum");

    }
}

class Nova extends Base {
    someMethod() {
        console.log("Bacon ipsum");

    }
}

class Nova2 extends Base {

}

const myObj = new Nova();
const myObj2 = new Nova2();

myObj.someMethod();
myObj2.someMethod();


// 11 - visiblidades

/*

    public = default pode ser acessado de qualquer lugar
    protected = Acessivel somente a subclasses da classe do método, necessario um metodo para acessar
    private = apenas a classe que declarou o metodo pode utilizar

*/

// public

class C {
    x = 10;
}

class D extends C {

}

const cInstance = new C();
const dInstance = new D();

console.log(cInstance.x);
console.log(dInstance.x);


// protected

class E {
    protected x = 11;

    protected methodProtect() {
        console.log("Metodo protegido");

    }
}

class F extends E {

    showX() {
        console.log("X:" + this.x);
    }

    ShowMethodProtect() {
        this.methodProtect()
    }

}

const fInstance = new F();
fInstance.showX();
fInstance.ShowMethodProtect();


class PrivateClass {
    private name = "Private"


    showName() {
        return this.name
    }

    private pMethod() {
        console.log("Metodo privado");

    }

    showPrivateMethod() {
        return this.pMethod()
    }
}


const pObj = new PrivateClass();

console.log(pObj.showName());
pObj.showPrivateMethod();


// class TstPrivate extends PrivateClass {
//     myMethod() {
//         this.pMethod()
//     }    
// }


// 12 - static members

class StaticMembers {
    static prop = "Static";

    static staticMethod() {
        console.log("Metodo estatico");

    }
}

console.log(StaticMembers.prop);
StaticMembers.staticMethod();


// 13 -  GENERIC Class


class Item<T, U> {
    fname
    sname

    constructor(fname: T, sname: U) {
        this.fname = fname;
        this.sname = sname;
    }

    get showFirst() {
        return `o primeiro é ${this.fname}`
    }
}


const newItem = new Item("Caixa", "Surpresa");

console.log(newItem.showFirst);
console.log(typeof newItem.showFirst);


const newItem2 = new Item(3, ["abacaxi", "banana"]);

console.log(newItem2.showFirst);
console.log(typeof newItem.showFirst);



// 14 - Paramaters proprerties

class ParametersProp {
    constructor(
        public name: string,
        private qty: number,
        private price: number
    ) {
        this.name = name;
        this.qty = qty;
        this.price = price
    }

    get showQty() {
        return `QTD total: ${this.qty}`
    }

    get showPrice() {
        return `Price total: ${this.price}`
    }
}


const newShirt = new ParametersProp("Camisa",5,19.85);

console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);


// 15 - CLASS EXPRESSIONS

const myClass = class<T> {
    name

    constructor(name: T) {
        this.name = name;
    }
}


const Pessoa = new myClass("Mr.Popo");

console.log(Pessoa);
console.log(Pessoa.name);


// 16 - ABSTRACT CLASS - nao podemos instaciar uma abstract class


abstract class AbsClass {
    abstract showName():void
}


// const myName = new AbsClass

class AbsExemple extends AbsClass {
    name: string

    constructor(name: string) {
        super();

        this.name = name;
    }

    showName() {
        console.log(`O nome é ${this.name}`);
        
    }
}


const absObj = new AbsExemple("GaBRIEL");

absObj.showName();


// 17 - Class Relations

class Dog {
    name!: string
}

class Cat {
    name!: string
}

const dogzin: Dog = new Cat();

console.log(dogzin);
