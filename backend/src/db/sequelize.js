import {DataTypes, Sequelize} from "sequelize";
import { cars } from "./cars-mock.js"
import CarModel from "../models/car.js";
import 'dotenv/config'

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_USER_PASSWORD, {
    host: 'localhost',
    dialect: 'mariadb',
    port: process.env.DB_PORT,
    dialectOptions: {
        timezone: 'Etc/GMT-2',
    },
    logging: false
})

const Car = CarModel(sequelize, DataTypes)

const initDb = () => {
    return sequelize.sync({force: true}).then(_ => {
        cars.map(car => {
            Car.create({
                name: car.name,
                picture: car.picture,
                pricePerDay: car.pricePerDay
            }).then(car => console.log(car.toJSON()))
        })
        console.log('La base de donnée a bien été initialisée !')
    })
}

export default { initDb };

export {Car}