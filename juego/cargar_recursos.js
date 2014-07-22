//D66
//indicar en una cadena los recursos: audios, imagenes, tmx, json
//callback para configurar los sprites

var recursos = "mosaicos_escenario_32x32.png, jugador.json, mio.tmx, mosaicos_mario_enano_30x30.png";

Q.loadTMX(recursos, function(){
	Q.compileSheets("mosaicos_mario_enano_30x30.png", "jugador.json");
	Q.stageScene("mundo1");	
});
