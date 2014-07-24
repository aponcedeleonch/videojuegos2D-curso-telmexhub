//Animaciones Goomba

Q.animations("animacionesGoomba", {
	caminar:{
		frames: [0, 1],
		rate: 1/2,
		loop: true
	},
	aplastar: {
		frames: [3],
		rate: 1/2,
		loop: false,
		trigger: "destruir"
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
		
		//Evento al ocurrir una colision con algun Goomba (por arriba)
		this.on("bump.top", this, "aplasta");
		this.on("destruir", function(){
			this.destroy();
		});
	},
	aplasta: function(colision){
		//Si se colisiona con un objeto de tipo Jugador
		if(colision.obj.isA("Jugador")){
			//Goomba muere (ejecuta la animacion, destruye el objeto)
			this.play("aplastar");
		}	
	}
});