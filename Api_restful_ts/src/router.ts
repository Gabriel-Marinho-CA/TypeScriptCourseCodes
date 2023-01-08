import { Router, Response, Request } from "express";
import { CreateMovie, FindMovieById, getAllMovies, RemoveMovie, updateMovie } from "./controllers/movieControllers";

//validation

import { validate } from "./middleware/handlleValidations";
import { movieCreateValidation } from "./middleware/MovieValidations";

const router = Router();

router.get("/test", (req: Request, res: Response) => {

    res.status(200)
        .send("API funcionando");

}).post("/movie", movieCreateValidation(), validate, CreateMovie)
    .get("/movie/:id", FindMovieById)
    .get("/movie/", getAllMovies)
    .delete("/movie/:id", RemoveMovie)
    .patch("/movie/:id",updateMovie)

export default router;