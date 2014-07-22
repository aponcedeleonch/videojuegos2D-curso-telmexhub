//D63
//indicar el nombre de la escena y el callback
//se carga el mapa

Q.scene("mundo1", function(stage){
	//configurar escena (stage)
	//cargar el archivo TMX
	Q.stageTMX("mio.tmx", stage);
});
