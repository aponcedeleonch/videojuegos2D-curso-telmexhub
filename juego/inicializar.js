//accedemos a las funcionalidades del engine

var Q = Quintus();

//el juego se ejecutará en la etiqueta del canvas cuyo id es juego
//opcionalmente se puede dar como segundo parametro un objeto de configuración

Q.setup("juego", { //"juego" es el id del canvas
	maximize:  true //Desprecia el ancho y el alto del canvas
	//maximize: "touch" //Desprecia el ancho y el alto para moviles
	//maximize: "false" //Toma el ancho y el alto del canvas
});

//modulos a utilizar (6)

Q.include("Sprites, Scenes, 2D, Input, Touch, TMX");

//Q.include("Sprites, Scenes, 2D, Input, Touch, TMX").controls().touch();

//activamos los controles del teclado y controles touch

Q.controls();
Q.touch();

//Q.controls().touch();
