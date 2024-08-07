import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import sequelize from './src/db/sequelize.js'

import findAllCars from "./src/routes/findAllCars.js";
import findCarByPk from "./src/routes/findCarByPk.js";
import createCar from "./src/routes/createCar.js";
import updateCar from "./src/routes/updateCar.js";
import deleteCar from "./src/routes/deleteCar.js";
import searchCars from './src/routes/searchCars.js'
import authRoute from './src/routes/auth.js'
import booking from './src/routes/booking.js'
import createReservation from './src/routes/createReservation.js'
import getUserReservations from './src/routes/getUserReservations.js'

const app = express()
const port = 3000

sequelize.initDb()

app
  .use(cors())
  .use(morgan('dev'))
  .use(bodyParser.json())

authRoute(app);
findAllCars(app)
searchCars(app)
findCarByPk(app)
createCar(app)
updateCar(app)
deleteCar(app)
booking(app)
createReservation(app)
getUserReservations(app)


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

