import { Booking } from '../db/sequelize.js';

export default (app) => {
  app.post('/api/bookings', async (req, res) => {
    const { userId, carId, startDate, endDate, totalPrice, duration } = req.body;
    try {
      const booking = await Booking.create({ userId, carId, startDate, endDate, totalPrice, duration });
      res.status(201).json({ message: 'Réservation créée avec succès.', data: booking });
    } catch (error) {
      res.status(500).json({ message: 'Une erreur est survenue.', error });
    }
  });
};
