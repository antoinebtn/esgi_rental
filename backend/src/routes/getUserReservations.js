import { Booking, Car } from '../db/sequelize.js';

export default (app) => {
  app.get('/api/users/:userId/bookings', async (req, res) => {
    const { userId } = req.params;
    try {
      const bookings = await Booking.findAll({
        where: { userId },
        include: [{ model: Car }]
      });
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ message: 'Une erreur est survenue.', error });
    }
  });
};