import { Weather } from "../models/weatherModel.js"


export const getWeather = (req, res) => {
    const location = req.params.name
    Weather.findAll({where: {location: location}})
    .then(weather => {
        res.status(200).send(weather || `No history data for ${location}`)
    })
    .catch(err => {
        console.log(err)
    })
}

export const addWeather = (req,res) => {
    Weather.create( {
        location: req.body.location,
        temp: req.body.temp,
        feelTemp: req.body.feelTemp,
        cond: req.body.cond,
        humidity: req.body.humidity,
        imageKey: req.body.imageKey
    })
    .then(() => {
        res.status(201).send({message: "Created"})
    })
    .catch(err => {
        console.log(err)
    })
}