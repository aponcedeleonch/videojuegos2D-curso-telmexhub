//D66
//indicar en una cadena los recursos: audios, imagenes, tmx, json
//callback para configurar los sprites

//Carga todos los recursos del mapa
var recursos = "subterraneo.mp3, mario_muere.mp3, pausa.mp3, bump.ogg, patada.mp3, salto_enano.mp3, tema_superficie.mp3, mosaicos_escenario_32x32.png, jugador.json, mio.tmx, mosaicos_mario_enano_30x30.png, goomba.json, mosaicos_enemigos_32x32.png, mosaicos_enemigos_32x46.png, tortuga.json, tuberias.json, mosaicos_subway.png, tuberias.png, mundo1_subway.tmx";

Q.loadTMX(recursos, function() {
	//Carga las imagenes con sus respectivos archivos de configuracion JSON
	Q.compileSheets("mosaicos_mario_enano_30x30.png", "jugador.json");
	Q.compileSheets("mosaicos_enemigos_32x32.png", "goomba.json");
	Q.compileSheets("mosaicos_enemigos_32x46.png", "tortuga.json");
	Q.compileSheets("tuberias.png", "tuberias.json");
	//Carga la escena
	Q.stageScene("mundo1");
	Q.stageScene("score", 1);
}, {
	progressCallback : function(leidos, totales) {
		$(document).ready(function(){
			var porcentaje = Math.floor((leidos/totales)*100);
			$("#barra").css("width", porcentaje + "%");
			
			if(leidos === totales){
				$("#contenedor_barra").remove();
				$("#contenedor-boton").show();
			}
		});
		/*var porcentaje = Math.floor((leidos / totales) * 100);
		$("#barra").css("width", porcentaje + "%");

		if (leidos === totales) {
			$("#contenedor_barra").remove();
			$("#contenedor-boton").show();
		}*/
	}
});

//Le pegamos una bandera al objeto Q que inicializaremos en falso
Q.pausado = false;

$(document).ready(function() {
	$("#boton-pausa").click(function() {
		var esteBoton = $(this);

		//Revisando si el juego esta pausado
		if (Q.pausado === true) {
			Q.stage(0).unpause(); //Reanudar el juego
			
			//Reproduce la cacion desde el inicio, no importando en que momento fue pausada
			//Hacer que vuelva a iniciar desde el punto en que se quedo, es algo complicado
			Q.audio.play("tema_superficie.mp3");
			//Q.audio.play("pausa.mp3");
			
			esteBoton.text("Pausar");
			Q.pausado = false;
		} else {
			Q.stage(0).pause(); //Pausar el juego
			//Q.audio.stop(); //Para todas las canciones
			Q.audio.stop("tema_superficie.mp3"); //Para un cancion en especifice
			Q.audio.play("pausa.mp3");
			
			esteBoton.text("Reanudar");
			Q.pausado = true;
		}
	});
});
