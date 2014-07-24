//Definir una nueva escena, que convivira con la del escenario

Q.scene("score", function(stage){
	var textoPuntaje = new Q.UI.Text({
		label: "Goombas",
		color: "brown",
		y: 20,
		x: 500,
		size: 20
	});
	stage.insert(textoPuntaje);
});
