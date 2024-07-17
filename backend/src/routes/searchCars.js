import { Car } from "../db/sequelize.js";

export default (app) => {
  app.get('/api/cars/search', async (req, res) => {
    try {
      const { location } = req.query;

      if (!location) {
        return res.status(400).json({ message: 'Location parameter is required' });
      }

      const cars = await Car.findAll({
        where: {
          location: location
        }
      });
      const message = "La liste des voitures a bien été récupérée."
      res.json({message, data: cars })
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
}
