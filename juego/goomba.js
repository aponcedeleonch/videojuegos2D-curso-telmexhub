//Animaciones Goomba

Q.animations("animacionesGoomba", {
	caminar:{
		frames: [0, 1],
		rate: 1/2,
		loop: true
	}
});

//D57
//Definimos la clase Jugador que se extiende la clase Sprite
//Sprite pertenece al core de Quintu
//nombre de la clase y objeto de configuración de la clase

Q.Sprite.extend("Goomba", {
	init: function(p){
		this._super(p, {
			sprite: "animacionesGoomba",
			sheet: "goomba", //Configuracion JSON
			frame: 0, //Que cuadro en la imagen es el que queremos tomar
			vx: 170 //Velocidad en x, funciona con movimiento automatico
		});
		this.add("2d, aiBounce, animation"); //Hace que se mueva automaticamente
		this.play("caminar"); //Se ejecutara la animacion al crear el sprite
	}
});