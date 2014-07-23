//Definir animaciones

//El primer parametro es el nombre de las animaciones, el segundo es un objeto de Javascript
//El segundo objeto son en si las funcionalidades de la animacion, que a su vez tambien son objetos

Q.animations("animacionesMario", {
	caminar:{
		frames: [4, 5, 8], //Elegimos los frames de la imagen
		rate: 1/6, //6 frames por segundo
		loop: false
	},
	saltar:{
		frames: [2],
		rate: 1/2,
		loop: false
	},
	quieto:{
		frames: [1],
		rate: 1/2,
		loop: false
	}
});

//D57
//Definimos la clase Jugador que se extiende la clase Sprite
//Sprite pertenece al core de Quintu
//nombre de la clase y objeto de configuración de la clase

Q.Sprite.extend("Jugador", {
	//Funcion para inicializar
	init: function(p){
		this._super(p, {
			sprite: "animacionesMario", //Grupo de animaciones que utilizara
			sheet: "jugador", //Configuracion JSON
			frame: 1, //Que cuadro en la imagen es el que queremos tomar
			jumpSpeed: -600, //Salto
			speed: 150 //Velocidad en x, solo funciona cuando tu controlas el jugador
		});
		this.add("2d, platformerControls, animation"); //Añade controles (2d, controles, animaciones)
	},
	//Esta funcion se repite continuamente (al caminar el jugador)
	step: function(){
		//Si el jugador va hacia la izquierda y quiere moverse a la derecha
		if(this.p.direction === "left" && Q.inputs["right"]){
			this.p.flip = false;
		}
		if(this.p.direction === "right" && Q.inputs["left"]){
			this.p.flip = "x";
		}
		
		//Ejecutar animacion de caminar
		if(this.p.vx != 0){
			this.play("caminar");
		}
		
		//Ejecutar animacion de saltar
		if(this.p.vy < 0){
			this.play("saltar");
		}
		
		//Ejecutar animacion de estar quieto
		if(this.p.vy == 0 && this.p.vx == 0){
			this.play("quieto");
		}
	}
});
