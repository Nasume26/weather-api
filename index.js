import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import { sequelize } from "./db/index.js";
import router from "./weather.js";


const app=express();
const port = process.env.PORT || 3007;

app.use(cors())

sequelize.sync()
.then(result => {
    console.log(result)
})
.catch (err => {
    console.log(err)
})

app.use(bodyParser.json());

app.use("/api/weather", router)

app.get("/api", (req,res) => {
    res.status(200).send('Welcome to the weather log API!');
});


app.listen(port, () => console.log(`Server is running on port ${port}`))

export default app;