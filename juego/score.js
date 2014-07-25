//Crear un texto que representa el numero de goombas muertos

Q.UI.Text.extend("PuntosGoomba", {
	init: function(p){
		this._super(p, {
			label: "0",
			color: "green",
			y: 20,
			x: Q.width - 60,
			size: 30,
			family: "Share Tech Mono"
		});
		//Escuchar el evento al momento de cambiar la variable goombasMuertos
		Q.state.on("change.goombasMuertos", this, "actualizaMuertes");
	},
	actualizaMuertes: function(puntaje){
		this.p.label = "" + puntaje;	
	}
});

//Definir una nueva escena, que convivira con la del escenario

Q.scene("score", function(stage){
	
	//Creando una variable que puede ir cambiando
	Q.state.set("goombasMuertos", 0);
	
	//Creamos un objeto de la clase PuntosGoomba y lo insertamos en la escena
	var valorPuntaje = new Q.PuntosGoomba();
	
	//Creando el letrero
	var textoPuntaje = new Q.UI.Text({
		label: "Goombas: ",
		color: "brown",
		y: 20,
		x: Q.width-160,
		size: 30,
		family: "Share Tech Mono"
	});
	
	//Insertando el letero en el escenario
	stage.insert(textoPuntaje);
	stage.insert(valorPuntaje);
});
