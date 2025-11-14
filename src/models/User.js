// src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  preferences: { type: Object, default: {} }, // store multi-step form data
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
