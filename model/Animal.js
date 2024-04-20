const mongoose = require('mongoose');

// Define Animal schema
const animalSchema = new mongoose.Schema({
  zoo: {
    type: String,
    required: true
  },
  scientificName: {
    type: String,
    required: true
  },
  commonName: {
    type: String,
    required: true
  },
  givenName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  isTransportable: {
    type: Boolean,
    required: true
  }
});

// Create Animal model from schema
const Animal = mongoose.model('Animal', animalSchema);

// Export the Animal model
module.exports = Animal;
