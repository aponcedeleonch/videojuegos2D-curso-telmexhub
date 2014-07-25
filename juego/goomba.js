//Animaciones Goomba

Q.animations("animacionesGoomba", {
	caminar:{
		frames: [0, 1],
		rate: 1/2,
		loop: true
	},
	aplastar: {
		frames: [3],
		rate: 1/4,
		loop: false,
		trigger: "destruir" //Como que crea un evento llamado destruir
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
			vx: 130 //Velocidad en x, funciona con movimiento automatico
		});
		this.add("2d, aiBounce, animation"); //Hace que se mueva automaticamente
		this.play("caminar"); //Se ejecutara la animacion al crear el sprite
		
		//Evento al ocurrir una colision con algun Goomba (por arriba), manda a llamar a la fucion aplasta de aqui
		this.on("bump.top", this, "aplasta");
		
		//Cuando se manda a llamar al evento destruir, ejecuta la funcion ahi
		this.on("destruir", function(){
			this.destroy();
			//Incrementando la variable de goombas muertos
			Q.state.inc("goombasMuertos", 1);
		});
	},
	aplasta: function(colision){
		//Si se colisiona con un objeto de tipo Jugador
		if(colision.obj.isA("Jugador")){
			//Poniendo audio
			Q.audio.play("bump.ogg");
			//Haciendo rebotar a Mario
			colision.obj.p.vy = -500;
			//Ejecuta animacion aplastar
			this.play("aplastar");
		}	
	}
});