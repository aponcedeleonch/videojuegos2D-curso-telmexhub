//D57
//Definimos la clase Jugador que se extiende la clase Sprite
//Sprite pertenece al core de Quintu
//nombre de la clase y objeto de configuración de la clase

Q.Sprite.extend("Jugador", {
	init: function(p){
		this._super(p, {
			sheet: "jugador", //Configuracion JSON
			frame: 1, //Que cuadro en la imagen es el que queremos tomar
			jumpSpeed: -600, //Salto
			speed: 150 //Velocidad en x solo funciona cuando tu controlas el jugador
		});
		this.add("2d, platformerControls"); //Añade controles
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
	}
});
