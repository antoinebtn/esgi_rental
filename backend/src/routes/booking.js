import { Booking, Car } from "../db/sequelize.js";
import { verifyToken } from "../middleware/authMiddleware.js";

export default (app) => {
  app.post('/api/booking', verifyToken, async (req, res) => {
    try {
      const { carId, startDate, endDate } = req.body;
      const userId = req.user.id;

      const Booking = await Booking.create({ carId, userId, startDate, endDate });
      res.status(201).json({ message: 'Reservation created successfully', reservation });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
}
