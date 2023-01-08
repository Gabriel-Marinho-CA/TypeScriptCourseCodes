import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.json());


// MIDDLEWARE

function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path);
    next();

}

app.use(showPath)

app.get("/", (req, res) => {
    console.log(req);

    return res.send("Helo express")
});


app.post("/api/product", (req, res) => {
    console.log(req.body);

    return res.send("pdp add");

})

app.all("/api/product/check", (req, res) => {
    if (req.method === "POST") {
        return res.send("Inseriu algum registro");
    } else if (req.method === "GET") {
        return res.send("Leu algum registro");
    } else {
        return res.send("Nao podemos realizar essa operacao");
    }
})

app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("Utilizando as interfaces");
})

app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        name: "Shirt",
        price: 30,
        color: "Blue",
        size: ["P", "M"]
    })
})

app.get("/api/product/:id", (req: Request, res: Response) => {
    console.log(req.params);

    const id = req.params.id

    if (id === "1") {

        const product = {
            id: 1,
            name: "Bone",
            price: 10
        };

        return res.json(product);

    } else {
        return res.send("Produto nao encontrado")
    }

});

app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {

    console.log(req.params);


    const pdpId = req.params.id;
    const reviewId = req.params.reviewId;

    return res.send(`Acessando a review ${reviewId} do produito ${pdpId}`)
});

app.get("/api/user/:id", getUser)


function getUser(req: Request, res: Response) {
    console.log(`Usuario com id: ${req.params.id}`);

    return res.send("Usuario encontrado");

}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
    return res.json(
        {
            msg: "Bem vindo ao dashboard administrativo"
        })
})

function checkUser(req: Request, res: Response, next: NextFunction) {
    if (req.params.id === "1") {
        console.log("Pode seguir");

        next();
    } else {
        console.log("Acesso restrito");

    }
};


app.get("/api/user/:id/details/:name", (
    req: Request<{ id: string, name: string }>, 
    res: Response<{ status: boolean }>
    ) => {
        console.log(`Id: ${req.params.id}`);
        console.log(`Name: ${req.params.name}`);
     
        return res.json({
            status: true
        })
    }
);

app.get("/api/error", (req: Request, res: Response) => {
    try {
        
        throw new Error("Algo deu errado");

    } catch(e: any) {

        res.status(500).json({msg:e.message});
    }
})

app.listen(3000, () => {
    console.log("App Funcionando");

})