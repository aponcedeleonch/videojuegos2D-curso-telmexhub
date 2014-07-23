//D57
//Definimos la clase Jugador que se extiende la clase Sprite
//Sprite pertenece al core de Quintu
//nombre de la clase y objeto de configuración de la clase

Q.Sprite.extend("Goomba", {
	init: function(p){
		this._super(p, {
			sheet: "goomba", //Configuracion JSON
			frame: 0, //Que cuadro en la imagen es el que queremos tomar
			vx: 170 //Velocidad en x, funciona con movimiento automatico
		});
		this.add("2d, aiBounce"); //Hace que se mueva automaticamente
	}
});