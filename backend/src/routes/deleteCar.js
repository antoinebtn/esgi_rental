import {Car} from "../db/sequelize.js";


export default (app) => {
    app.delete('/api/cars/:id', (req, res) => {
        Car.findByPk(req.params.id).then(car => {
            const carDeleted = car;
            Car.destroy({
                where: { id: car.id }
            })
                .then(_ => {
                    const message = `La voiture avec l'identifiant n°${carDeleted.id} a bien été supprimée.`
                    res.json({message, data: carDeleted })
                })
        })
    })
}