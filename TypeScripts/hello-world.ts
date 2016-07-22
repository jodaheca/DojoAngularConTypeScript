
//Tipos de datos en TypeScript
var a = "hola";
var counter : number;
var string : string;
var boleano : boolean;
var any : any;
var arreglo : Array<number>;

counter = 4;

for(let i = 0; i <10; i++){
	setTimeout(function() {
		console.log("What do you think" + i)
	});
}

interface Icar {
	name : string;
	model : string;
	year : number;
}

function nombre(car : Icar){
	car.name = "";
}