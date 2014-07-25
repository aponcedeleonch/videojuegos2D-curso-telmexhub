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
	},
	muere: {
		frames: [12],
		rate: 1/2,
		loop: false,
		trigger: "casiMuerto"
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
			speed: 150, //Velocidad en x, solo funciona cuando tu controlas el jugador
			estaVivo: true
		});
		this.add("2d, platformerControls, animation, tween"); //Añade controles (2d, controles, animaciones)
		
		//Evento de cuando algo choca contra el jugador
		this.on("bump.left, bump.right, bump.top", function(colision){
			//Si el objeto con el que se ha topado es un enemigo
			if(colision.obj.p.enemigo === true){
				this.p.ignoreControls = true; //Desactivando los controles
				this.p.estaVivo = false; //Declarando al jugador muerto
				this.play("muere"); //Haciendo la animacion de muerto
				
				//Desactiva todos los sonidos y despues reproduce el del mario muerto
				Q.audio.stop();
				Q.audio.play("mario_muere.mp3");
				
				//Obtiene todos los goombas
				Q("Goomba").items.forEach(function(enemigo){
					enemigo.p.vx = 0;
					enemigo.p.animation = null;
				});
				
				//Obtiene todos los tortugas
				Q("Tortuga").items.forEach(function(enemigo){
					enemigo.p.vx = 0;
					enemigo.p.animation = null;
				});
				
			}
		});
		
		//Animacion tween
		this.on("casiMuerto", this, function(){
			//Quita la gravedad
			this.del("2d");
			//Hace que el mario se eleve en 0.5 segundos
			this.animate({
				y: this.p.y - 100
			}, 0.5, {
				//Al terminar de elevarse ejecutara esto
				//Sacar al jugador del escenario
				callback: function(){
					this.animate({
						y: Q("TileLayer").first().p.h
					}, 0.5, {
						//Destruir al jugador completamente
						callback: function(){
							this.destroy();
						}
					});
				}
			});
		});
	},
	//Esta funcion se repite continuamente (al caminar el jugador)
	step: function(){
		
		if(this.p.estaVivo){
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
				Q.audio.play("salto_enano.mp3",{
					debounce: 1000
				});
				this.play("saltar");
			}
			
			//Ejecutar animacion de estar quieto
			if(this.p.vy == 0 && this.p.vx == 0){
				this.play("quieto");
			}
		}
	}
});
