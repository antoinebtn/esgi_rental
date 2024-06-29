import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { getUniqueId, success } from './helpers/helpers.js';
import { cars } from "./mocks/cars-mock.js";

const app = express()
const port = 3000

app
  .use(cors())
  .use(morgan('dev'))
  .use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`URL: ${req.url}`);
    next();
});


// app.use(function (req, res, next) {
//     console.log('Time: ', Date.now());
// })

app.get('/api/cars', (req, res) => {
    const message = "La liste des voiture a bien été trouvée"
    res.json(success(message, cars));
})

app.get('/api/cars/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const car = cars.find(cars => cars.id === id);
    const message = "Une voiture a bien été trouvée"
    res.json(success(message, car));
})

app.post('/api/cars', (req, res) => {
    const id = getUniqueId(cars);
    const carCreated = {...req.body, ...{id: id, created: new Date()}};
    cars.push(carCreated);
    const message =`La voiture ${carCreated.name} a bien été ajoutée.`;
    res.json(success(message,carCreated))
})

app.put('/api/cars/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const carUpdated = { ...req.body, id: id};
    cars.map(car => {
        return car.id === id ? carUpdated : car
    });
    const message = `La voiture ${carUpdated.name} a bien été modifiée.`;
    res.json(success(message,carUpdated));
})

app.delete('/api/cars/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const carDeleted = cars.find(car => car.id === id)
    cars.filter(car => car.id === id)
    const message = `La voiture ${carDeleted.name} a bien été supprimé.`
    res.json(success(message, carDeleted))
  });

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

