import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../db/sequelize.js';
import 'dotenv/config'

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET_KEY; // Change this to your secret key

export default (app) => {
  app.post('/api/register', async (req, res) => {
    try {
      const { email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const user = await User.create({ email, password: hashedPassword });
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  app.post('/api/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '1h' });
      res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
}
