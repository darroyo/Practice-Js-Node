//	Obtenemos process
const process = require('process');

//	Obtenemos argv
const argv = process.argv;

//	Línea blanco
console.log("xxx");

/*

El	programa	debe	comenzar	asignando	con	mul<-asignación	los	parámetros	de	la	invocación	a	tres variables:	a	 la	primera	el	parámetro	0	(ruta	al	 interprete	de	node),	a	 la	segunda	el	parámetro	1	(ruta	al	fichero	mod2_cmd_iterators.js)	y	a	la	tercera	un	array	con	el	resto	de	los	parámetros.	

*/

let rutaInterprete = "";
let rutaFichero = "";
let restoParametros = "";

[rutaInterprete, rutaFichero, ...restoParametros] = argv;

/*

A	con<nuación	se	imprimen	por	consola	los	mensajes	con	la	ruta	a	node.js	y	al	fichero.	

*/

console.log(`Route to node.js: ${rutaInterprete}`);
console.log(`Route to this file: ${rutaFichero}`);


/*

Después	se	busca	si	se	ha	incluido	la	opción	-r	en	el	array	con	el	resto	de	parámetros	y	se	eliminan	
todas	las	ocurrencias	del	parámetro	que	viene	a	con<nuación	en	dicho	array.	

*/
console.log(restoParametros);

restoParametros = 
	restoParametros.reduce((ac, elemento, i, array) => {
		if(array[i-1] ==="-r"){
			
			//	Eliminamos repeticiones
			ac = ac.filter(x=>x!==elemento);
			
			//	Eliminamos la r actual, alternativa 1
			// ac.splice(ac.findIndex(x=>x === "-r"), 1);
			
			return ac;
		}else{
			return ac;
		}		
	},restoParametros);
//	Eliminamos todas las r, alternativa 2, creo que mas eficiente
restoParametros = restoParametros.filter(x=>x!="-r");

console.log(restoParametros);


