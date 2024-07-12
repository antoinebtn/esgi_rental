import {Car} from "../db/sequelize.js";


export default (app) => {
    app.put('/api/cars/:id', (req, res) => {
        const id = req.params.id
        Car.update(req.body, {
            where: { id: id }
        })
            .then(_ => {
                Car.findByPk(id).then(car => {
                    const message = `La voiture ${car.name} a bien été modifié.`
                    res.json({message, data: car })
                })
            })
    })
}