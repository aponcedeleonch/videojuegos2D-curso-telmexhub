//Accedemos a las funcionalidades del engine

var Q = Quintus({
	audioSupport: ["mp3", "ogg"]
});

//El juego se ejecutará en la etiqueta del canvas cuyo id es juego
//Ppcionalmente se puede dar como segundo parametro un objeto de configuración

Q.setup("juego", { //"juego" es el id del canvas
	//maximize:  true //Desprecia el ancho y el alto del canvas
	maximize: "touch" //Desprecia el ancho y el alto para moviles
	//maximize: "false" //Toma el ancho y el alto del canvas
});

//Modulos a utilizar

Q.include("Sprites, Scenes, 2D, Input, Touch, TMX, Anim, Audio, UI");
//Q.include("Sprites, Scenes, 2D, Input, Touch, TMX").controls().touch();


//Activamos el sonido

Q.enableSound();

//Activamos los controles del teclado y controles touch

Q.controls();
Q.touch();
//Q.controls().touch();
