//D63
//indicar el nombre de la escena y el callback
//se carga el mapa

Q.scene("mundo1", function(stage){
	//configurar escena (stage)
	//cargar el archivo TMX
	Q.stageTMX("mio.tmx", stage);

	//Obteniendo la capa del background, es la primera en el TileLayer, por eso el first
	var capaFondo = Q("TileLayer").first();
	
	
	//Moviendo la camara para seguir al jugador
	//El primer parametro sigue al jugador (llamado a funcion)
	//El segundo parametro indica en que coordenadas debe seguirlo (objeto)
	//El tercer parametro indica hasta que punto en "x" y "y" debe seguirlo (objeto)
	stage.add("viewport").follow( Q("Jugador").first(), {
		x: true,
		y: true
	}, {
		minX:32,
		//Ancho de la capa del cielo
		maxX: capaFondo.p.w - 32,
		minY:0,
		maxY: capaFondo.p.h
	});
});
