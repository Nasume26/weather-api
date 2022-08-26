import  Router  from "express";

import { getWeather, addWeather } from "./controllers/weatherController.js";

const router = Router();

router.get("/:name", getWeather) 

router.post("/", addWeather)

export default router;