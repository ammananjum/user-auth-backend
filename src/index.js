require('dotenv').config();
const connectDB = require('./db');
connectDB();

const express = require('express');

const app = express();
app.use(express.json());
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
const userRoutes = require('./routes/user');
app.use('/api/user', userRoutes);


app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'User auth backend running' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
