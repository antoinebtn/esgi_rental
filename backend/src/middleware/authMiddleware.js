import jwt from 'jsonwebtoken';
import 'dotenv/config'

const jwtSecret = process.env.JWT_SECRET_KEY;

export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).send({ message: 'No token provided.' });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(500).send({ message: 'Failed to authenticate token.' });
    }
    req.user = decoded;
    next();
  });
};
