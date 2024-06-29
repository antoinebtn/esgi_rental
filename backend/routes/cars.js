import { Router } from 'express';
const carsRouter = Router();
import { sequelize, Sequelize } from '../Models/index.js';
import Cars from '../Models/cars.js';

Cars(sequelize, Sequelize.DataTypes);

carsRouter.get('/', async (req, res) => {
    const allProducts = await Products.findAll();
    res.status(200).json(allProducts);
});


carsRouter.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const OneProduct = await Products.findOne({ where:{id: id}, include: product_details});
    if (OneProduct) {
        return res.status(200).json(OneProduct);
    } else {
        return res.status(404).json('not found');
    }
});


export default carsRouter;

