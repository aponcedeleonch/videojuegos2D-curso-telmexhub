//D57
//Definimos la clase Jugador que se extiende la clase Sprite
//Sprite pertenece al core de Quintu
//nombre de la clase y objeto de configuración de la clase

Q.animations("animacionesCaja", {
	brillar:{
		frames: [2, 3, 4],
		rate: 1/3,
		loop: true
	},
 	apagado:{
 		frames:[5],
 		rate:1/2,
 		loop:false
  	}
});

Q.Sprite.extend("HongoVida", {
	//Funcion para inicializar
	init: function(p){
		this._super(p, {
			sheet: "objetos", //Configuracion JSON
			frame: 1,
			vx: 150, //Que cuadro en la imagen es el que queremos tomar
			sensor: true,
			z: 1
		});
		this.add("animation, tween, aiBounce"); //Añade controles (2d, controles, animaciones)	
		this.on("hit", function(colision){
			if(colision.obj.isA("Jugador")){
				this.destroy();
			}
		});
	}
});


Q.Sprite.extend("Caja", {
	//Funcion para inicializar
	init: function(p){
		this._super(p, {
			sprite: "animacionesCaja",
			sheet: "objetos", //Configuracion JSON
			frame: 3,
			gravity: 0 //Que cuadro en la imagen es el que queremos tomar
		});
		this.add("2d, animation"); //Añade controles (2d, controles, animaciones)	
		this.play("brillar");
		this.on("bump.bottom", function(colision){
			if(colision.obj.isA("Jugador")){
				this.play("apagado");
				
				var hongo = new Q.HongoVida({
					x: this.p.x,
					y: this.p.y
				});
				
				this.stage.insert(hongo);
				hongo.animate({
					y: this.p.y - 35
				}, 0.5, {
					callback: function(){
						this.p.sensor = false;
						this.add("2d");
					}
				});
			}
		});
	}
});
