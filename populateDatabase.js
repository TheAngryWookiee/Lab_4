// populateDatabase.js

const mongoose = require('mongoose');
const Animal = require('./model/Animal'); // Import Animal model

// Connect to MongoDB
mongoose.connect('mongodb://ethompson@localhost:27017/animals', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  // Generate and insert 1000 mock records
  generateAndInsertMockData();
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Function to generate and insert mock data
async function generateAndInsertMockData() {
  try {
    const mockData = require('./Mock_Data.csv');
    
    // Insert mock data into the database
    await Animal.insertMany(mockData);
    console.log('Data inserted successfully');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    // Close MongoDB connection
    mongoose.disconnect();
  }
}
