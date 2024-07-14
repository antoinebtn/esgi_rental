import {DataTypes, Sequelize} from "sequelize";
import { cars } from "./cars-mock.js"
import CarModel from "../models/car.js";
import BookingModel from "../models/booking.js"
import UserModel from "../models/user.js"

import bcrypt from 'bcrypt';
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
const Booking = BookingModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)

const initDb = async () => {
    await sequelize.sync({ force: true });
  
    // Créer les voitures
    for (const car of cars) {
      await Car.create({
        name: car.name,
        picture: car.picture,
        pricePerDay: car.pricePerDay,
        numberOfSeat: car.numberOfSeat,
        location: car.location
      });
    }
  
    // Créer les utilisateurs
    const hashedPasswordUser = await bcrypt.hash('password', 10);
    const hashedPasswordAdmin = await bcrypt.hash('password', 10);
  
    await User.create({
      email: 'user@example.com',
      password: hashedPasswordUser,
      role: 'user'
    });
  
    await User.create({
      email: 'admin@example.com',
      password: hashedPasswordAdmin,
      role: 'admin'
    });
  
    console.log('La base de donnée a bien été initialisée avec des voitures et des utilisateurs mock.');
  };

export default { initDb };

export {Car, Booking, User}