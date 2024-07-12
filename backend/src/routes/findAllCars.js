import {Car} from "../db/sequelize.js";


export default (app) => {
    app.get('/api/cars', (req, res) => {
        Car.findAll()
            .then(cars => {
                const message = 'La liste des voitures a bien été récupérée.'
                res.json({ message, data: cars })
            })
    })
}