//NARROWING =  Ver o type / refatorar para o type que desejamos. Além de trabalhar em cima do tipo recebido;

// 1 - TYPE GUARD


function sum(a: number | string, b: number | string) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    } else {
        console.log("Nao e possivel");

    }
}

sum("4", "2");
sum(5, 6);
sum("4", 6);

// 2 - checando se o valor existe


function operations(arr: number[], operation?: string | undefined) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);

        } else if (operation == "multiply") {
            const mult = arr.reduce((i, total) => i * total)
            console.log(mult);

        }
    }
    else {
        console.log("Defina uma operação");

    }
}

operations([1, 2, 4], "sum");
operations([1, 2, 4], "multiply");
operations([1, 2, 4]);

//3 - instance of

class User {
    name;

    constructor(name: String) {
        this.name = name;
    }
}

class SuperUser extends User {
    constructor(name: String) {
        super(name)
    }
}

const jhon = new User("jhon");
const paul = new SuperUser("Paul");

console.log(jhon);
console.log(paul);

function userGreeting(user: object) {
    if (user instanceof SuperUser) {
        console.log(`Ola ${user.name} gostaria de ver os dados`);

    } else if (user instanceof User) {
        console.log(`Ola ${user.name}`);

    }
}

userGreeting(jhon);
userGreeting(paul);



// 4 - Operator in

class Dog {
    name;
    breed;


    constructor(name: String, breed?: String) {
        this.name = name;

        if (breed) {
            this.breed = breed;
        }
    }
}


const turca = new Dog("Turca");

const bob = new Dog("Bob", "Xiuaua");


function showDogDetails(dog: Dog) {

    if ('breed' in dog) {
        console.log(`O cachorro é da raça : ${dog.breed}`);

    } else {
        console.log(`O cachorro nao tem raça`);

    }

}

showDogDetails(turca);
showDogDetails(bob);



// 5 - CHALLENGER 

class Reviews {
    stars;
    review;

    constructor(stars?: number, review?: string) {
        if (stars) this.stars = stars;
        if (review) this.review = review;
    }
}

class UserReviewsAndRatings extends Reviews {
    constructor(stars: number, review: string) {
        super(stars, review)
    }
}


const rev1 = new Reviews(1, " Pior que cortar cebola");
const rev2 = new Reviews(2);
const rev3 = new Reviews(3);
const rev4 = new Reviews(4);
const rev5 = new Reviews(5, "Melhor impossivel");
const rev6 = new Reviews();


function ReviewsBehavior(reviewAndRating: Reviews) {

    if ("review" in reviewAndRating && "stars" in reviewAndRating) {
        console.log(
            `Estrelas: ${reviewAndRating.stars} , O comentario do usuario é : ${reviewAndRating.review}
            \n e a avaliação do programa é:`
        );
        handleStarsComent(reviewAndRating);
    }
    else if ("stars" in reviewAndRating) {
        handleStarsComent(reviewAndRating)
    }

    else {
        return console.log(false);
    }
}

function handleStarsComent(reviewAndRatingUser: Reviews) {

    const stars = reviewAndRatingUser.stars;
    const commentUser = reviewAndRatingUser.review;

    switch (stars) {
        case 1:
            console.log(`Péssima avaliacao ${stars}`);
            break;
        case 2:
            console.log(`Ruim avaliação ${stars}`);
            break;
        case 3:
            console.log(`Média avaliação ${stars}`);
            break;
        case 4:
            console.log(`Boa avaliação ${stars}`);
            break;
        case 5:
            console.log(`Excelente avaliação ${stars}`);
            break;
    }
}


ReviewsBehavior(rev1);
ReviewsBehavior(rev2);
ReviewsBehavior(rev3);
ReviewsBehavior(rev4);
ReviewsBehavior(rev5);
ReviewsBehavior(rev6);