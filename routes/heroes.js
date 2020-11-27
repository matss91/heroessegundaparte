const express =require('express');
const router =express.Router();
const heroesController = require ('../controller.js/heroesController')
// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
/* app.get('/heroes', (req,res) => {
	res.send(heroes);
}); */
router.get("/",heroesController.mostrarJSON)
router.get("/detalle/:id",heroesController.datos)
router.get("/bio/:id/:ok?",heroesController.datos2)



module.exports= router
