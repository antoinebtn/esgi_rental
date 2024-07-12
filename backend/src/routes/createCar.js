import {Car} from "../db/sequelize.js";


export default (app) => {
    app.post('/api/cars', (req, res) => {
        Car.create(req.body)
            .then(car => {
                const message = `La voiture ${req.body.name} a bien été créée.`
                res.json({ message, data: car })
            })
    })
}