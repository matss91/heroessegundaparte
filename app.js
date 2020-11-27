// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

const rutaMain = require('./routes/main.js')
const rutaHeroes = require('./routes/heroes.js')

app.use ('/', rutaMain)
app.use ('/heroes',rutaHeroes)
/*/ Ruta Raíz / ➝ Home
app.get('/', function(req,res){
	res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en 	ti!.')
});/** */

//ruta heroes poner lo que falta aca va un export o algo parecido

// Ruta Créditos

