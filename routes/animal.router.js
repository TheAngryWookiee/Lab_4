const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animal.controller');

// GET route to display all animals
router.get('/', animalController.getAllAnimals);

// GET route to display a form for adding a new animal
router.get('/new', animalController.getNewAnimalForm);

// POST route to add a new animal
router.post('/new', animalController.addNewAnimal);

// GET route to display details of a specific animal
router.get('/:id', animalController.getAnimalDetails);

// GET route to display a form for editing a specific animal
router.get('/:id/edit', animalController.getEditAnimalForm);

// POST route to update details of a specific animal
router.post('/:id/edit', animalController.updateAnimalDetails);

// POST route to delete a specific animal
router.post('/:id/delete', animalController.deleteAnimal);

module.exports = router;