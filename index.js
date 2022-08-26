import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';


const app=express();

app.use(cors())

const port = process.env.PORT || 3007;

app.use(bodyParser.json());

app.get("/api", (req,res) => {
    res.status(200).send('Welcome to the weather log API!');
});


app.listen(port, () => console.log(`Server is running on port ${port}`))

export default app;