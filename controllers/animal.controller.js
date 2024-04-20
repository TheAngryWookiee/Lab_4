const Animal = require('../model/Animal');

// Controller methods (hopefully)
const animalController = {
  // Get all animals
  getAllAnimals: async (req, res) => {
    try {
      const animals = await Animal.find();
      res.render('all-animals', { animals });
    } catch (error) {
      console.error('Error fetching animals:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Get details of a specific animal
  getAnimalDetails: async (req, res) => {
    try {
      const animal = await Animal.findById(req.params.id);
      res.render('animal-details', { animal });
    } catch (error) {
      console.error('Error fetching animal details:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Add a new animal
  addNewAnimal: async (req, res) => {
    try {
      const newAnimal = new Animal(req.body);
      await newAnimal.save();
      res.redirect('/animals');
    } catch (error) {
      console.error('Error adding new animal:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Update details of a specific animal
  updateAnimalDetails: async (req, res) => {
    try {
      await Animal.findByIdAndUpdate(req.params.id, req.body);
      res.redirect('/animals/' + req.params.id);
    } catch (error) {
      console.error('Error updating animal details:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Delete a specific animal
  deleteAnimal: async (req, res) => {
    try {
      await Animal.findByIdAndDelete(req.params.id);
      res.redirect('/animals');
    } catch (error) {
      console.error('Error deleting animal:', error);
      res.status(500).send('Internal Server Error');
    }
  }
};

module.exports = animalController;