let heroes = require ('../data/heroes.json')

module.exports = {
    mostrarJSON : function (req, res){
        res.send (heroes)
    },



datos:(req,res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe =heroes.filter(function(elemento){
return (elemento.id==req.params.id)

	})
	if(heroe[0]!=undefined){
		res.send(heroe[0].nombre+heroe[0].profesion)
	}else{
res.send("no hay dicho superheroe")

	}
	
}	,// Si se encuentra al héroe se envía el nombre y su profesión
	// Si NO se encuentra se envía el mensaje de no encontrado

datos2:(req,res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe =heroes.filter(function(elemento){
		return (elemento.id==req.params.id)
		
			})
			if(heroe[0]!=undefined&&req.params.ok=="ok"){
				res.send(heroe[0].nombre+heroe[0].resenia)
			}else if(heroe[0]!=undefined){
		res.send(heroe[0].nombre+"lamento que no quieras saber mas de mi")
	}
	else{
res.send( "No encontramos"+
"un héroe para mostrarte su biografía")

}



	
	// Si NO se encuentra al héroe se envía un mensaje
	// Si se encuentra al héroe:
}		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
	
}