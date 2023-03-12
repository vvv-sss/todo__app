const User = require('../sequelize/models').User;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const crypto = require('crypto');
const SECRET_KEY = crypto.randomBytes(64).toString('hex');

module.exports = {

  // User registration
  async register(req, res) {
    try {
      const { username, password } = req.body;
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ username, password: hashedPassword });
      const accessToken = jwt.sign({ userId: newUser.id }, SECRET_KEY, { expiresIn: '1h' });
      return res.status(201).json({ accessToken, id: newUser.id, username: newUser.username });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  // User login
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      const accessToken = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
      return res.status(201).json({ accessToken, id: user.id, username: user.username });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  // User logout
  async logout(req, res) {
    return res.status(200).json({ message: 'User logged out' });
  },

  // Refresh token
  async refreshAccessToken(req, res) {
    try {
      const refreshToken = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(refreshToken, SECRET_KEY);
      const user = await User.findByPk(decodedToken.userId);
      if (!user) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      const accessToken = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
      return res.status(200).json({ accessToken });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
};

