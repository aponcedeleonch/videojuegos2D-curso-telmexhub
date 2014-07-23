//D66
//indicar en una cadena los recursos: audios, imagenes, tmx, json
//callback para configurar los sprites

//Carga todos los recursos del mapa
var recursos = "mosaicos_escenario_32x32.png, jugador.json, mio.tmx, mosaicos_mario_enano_30x30.png, goomba.json, mosaicos_enemigos_32x32.png, mosaicos_enemigos_32x46.png, tortuga.json";

Q.loadTMX(recursos, function(){
	//Carga las imagenes con sus respectivos archivos de configuracion JSON
	Q.compileSheets("mosaicos_mario_enano_30x30.png", "jugador.json");
	Q.compileSheets("mosaicos_enemigos_32x32.png", "goomba.json");
	Q.compileSheets("mosaicos_enemigos_32x46.png", "tortuga.json");
	//Carga la escena
	Q.stageScene("mundo1");	
});
