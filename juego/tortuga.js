//Declarando un componente
//Normlamente un componente modifica el game loop y sus propiedades
//Primer argumento el nombre del componente
//Segundo argumento, opciones de inicializacion
Q.component("saltarin", {
	added: function(){
		//Se ejecuta cuando se agrega a un sprite
		
		this.entity.on("step", this, "saltar");
	},
	saltar: function(){
		//Revisando si esta en el suelo
		if(this.entity.p.vy === 0){
			//Haciendo saltar a la entidad
			this.entity.p.vy = -400;
		}
	}
});


//Animaciones Tortuga

Q.animations("animacionesTortuga", {
	caminar:{
		frames: [0, 1],
		rate: 1/2,
		loop: true
	},
	enconchar: {
		frames: [2, 4],
		rate: 1/4,
		loop: false	
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
			vx: 120, //Velocidad en x, funciona con movimiento automatico
			esConcha: false,
			enemigo: true,
			z: 1
		});
		this.add("2d, aiBounce, animation, saltarin"); //Hace que se mueva automaticamente
		this.play("caminar");
		
		//Eventos	
		
		this.on("bump.top", this, "aconcha");
	}, 
	step: function(){
		//Si vx+, va hacia la derecha (voltear). Si vx- va hacia la izquierda
		if(this.p.vx > 0){
			this.p.flip = "x";
		} else{
			this.p.flip = false;
		}
	},
	aconcha: function(colision){
		if(colision.obj.isA("Jugador")){
			//Hacer rebotar a Mario
			colision.obj.p.vy = -500;
			
			Q.audio.play("patada.mp3");
			
			if(!this.p.esConcha){		
				//Cambiar el sheet para poder hacer la tortuga caparazon
				this.sheet("goomba", true);	
				this.p.esConcha = true;
			}
			
			this.play("enconchar");
			
			if(this.p.vx != 0){
				this.p.vx = 0;
			} else{
				this.p.vx = 500;
			}
		}
	}
});