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

//Haciendo un cronometro

Q.UI.Text.extend("Cronometro", {
	init: function(p){
		this._super(p, {
			label: "10",
			color: "green",
			y: 20,
			x: Q.width/2,
			size: 30,
			family: "Share Tech Mono"
		});
		
		//El metodo on nos permite escuchar eventos
		//Este evento en particular es llamado cuando Q.state.dec o Q.state.inc son ejecutados
		Q.state.on("change.tiempo", this, "actualizarTiempo");
	},
	//Recibe el valor en el que cambio la variable de estado
	actualizarTiempo: function(tiempo){
		this.p.label = "" + tiempo;
	}
});

//Definir una nueva escena, que convivira con la del escenario

Q.scene("score", function(stage){
	
	//Creando una variable que puede ir cambiando
	Q.state.set("goombasMuertos", 0);
	
	//Declarando una variable de estado representado el objeto Q
	//Las variables de estado en javascript son malvadas
	Q.state.set("tiempo", 10);
	
	//Creamos un objeto de la clase PuntosGoomba y lo insertamos en la escena
	var valorPuntaje = new Q.PuntosGoomba();
	
	var cronometro = new Q.Cronometro();
	
	//Es un contador, como primer argumento es la funcion que hara cada intervalo de tiempo,
	//el segundo intervalo es el intervalo de tiempo, en milisegundos
	var timer = setInterval(function(){
		//Obteniendo el tiempo actual
		var tiempo = Q.state.get("tiempo");
		
		//Si el tiempo todavia es mayor a cero y el juego no esta pausado decrementara
		if(tiempo > 0 && Q.pausado === false){
			Q.state.dec("tiempo", 1);	
		} //Si el tiempo ya se ha termiando, se saldra del setInterval 
		else if (tiempo <= 0){
			clearInterval(timer);
		}
	},1000);
	
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
	stage.insert(cronometro);
});
