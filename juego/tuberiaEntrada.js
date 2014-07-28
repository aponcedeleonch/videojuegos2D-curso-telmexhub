//D57
//Definimos la clase Jugador que se extiende la clase Sprite
//Sprite pertenece al core de Quintu
//nombre de la clase y objeto de configuración de la clase

Q.Sprite.extend("TuberiaEntrada", {
	//Funcion para inicializar
	init: function(p){
		this._super(p, {
			sheet: "tuberias", //Configuracion JSON
			frame: 2, //Que cuadro en la imagen es el que queremos tomar
			z: 1
		});
		this.add("2d"); //Añade controles (2d, controles, animaciones)	
	}
});
