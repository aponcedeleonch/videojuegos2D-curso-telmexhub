//Animaciones Tortuga

Q.animations("animacionesTortuga", {
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

Q.Sprite.extend("Tortuga", {
	init: function(p){
		this._super(p, {
			sprite: "animacionesTortuga",
			sheet: "tortuga", //Configuracion JSON
			frame: 0, //Que cuadro en la imagen es el que queremos tomar
			vx: 130 //Velocidad en x, funciona con movimiento automatico
		});
		this.add("2d, aiBounce, animation"); //Hace que se mueva automaticamente
		this.play("caminar");
	}, 
	step: function(){
		//Si vx+, va hacia la derecha (voltear). Si vx- va hacia la izquierda
		if(this.p.vx > 0){
			this.p.flip = "x";
		} else{
			this.p.flip = false;
		}
	}
});