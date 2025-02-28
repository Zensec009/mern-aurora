import express from "express";
import {Request, Response} from "express";

//creating an object of express and naming it as app.
const app = express();

// configuring express to use json for req and response.
app.use(express.json());

// Setting up index page. 
app.get('/', (req: Request, res: Response) => {
    res.send("Index Page");
});

app.listen("5000");