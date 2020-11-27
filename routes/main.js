const express =require('express');
const router =express.Router();
const mainController = require('../controller.js/mainController');


 
// Ruta Raíz / ➝ Home
router.get('/',mainController.index);
router.get('/creditos',mainController.creditos);

module.exports= router