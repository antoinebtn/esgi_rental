import {Car} from "../db/sequelize.js";


export default (app) => {
    app.get('/api/cars/:id', (req, res) => {
        Car.findByPk(req.params.id)
            .then(car => {
                const message = 'Une voiture a bien été trouvée.'
                res.json({ message, data: car })
            })
    })
}