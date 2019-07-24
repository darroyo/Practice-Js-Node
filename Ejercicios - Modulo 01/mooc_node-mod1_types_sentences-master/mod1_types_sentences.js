/*

1) Primera línea en blanco

*/

console.log("");

/*

2) Línea con el siguiente saludo: 
 
“Good morning/afternoon/night, it’s xxx o’clock” 
 
Utilizar if…else y el método getHour() del objeto Date para obtener el saludo: 
- getHour() devuelve la hora del día: 0-23. El saludo debe ser: Buenas noches (22h-6h), 
Buenos días (7h-12h) y Buenas tardes (13h-22h).

*/

let now = new Date().getHours();
const ITSHOUR = `, it’s ${now} o’clock`

if(now >=13 && now <=22){
	console.log(`Good afternoon${ITSHOUR}`);
}else if(now >= 7 && now <= 12){
	console.log(`Good morning${ITSHOUR}`);
}else{
	console.log(`Good night${ITSHOUR}`);
}

/*

3) Una línea en blanco

*/

console.log("");

/*

4) En la siguiente línea: Number PI with 6 decimals: (Pi con 6 decimales)

*/

const PI6 = Math.PI.toFixed(6);

console.log(`Number PI with 6 decimals: ${PI6}`);


/*

5) Una línea en blanco

*/

console.log("");


/*

6) La tabla con los números enteros de 0 a 22 en decimal, hexadecimal, octal y binario: 
0 dec = 0 hex = 0 oct = 0 bin 
1 dec = 1 hex = 1 oct = 1 bin 
…… 
21 dec = 15 hex = 25 oct = 10101 bin 
22 dec = 16 hex = 26 oct = 10110 bin 
Cada línea de la tabla debe generarse con una función que recibe solo el número decimal 
como parámetro y muestra por consola la línea con el valor representado en decimal, 
hexadecimal, octal y binario. Utilizar una plantilla de string ES6 para generar la línea.

*/

const FCONVERTNUMBERS = (dec) =>
{
   let hex = dec.toString(16);
   let oct = dec.toString(8);
   let bin = dec.toString(2);
   
   console.log(`${dec} dec = ${hex} hex = ${oct} oct = ${bin} bin`)
};

const FOUTPUTRANGE = (min, max) => 
{
	for(let i=min; i<= max; i++){
		FCONVERTNUMBERS(i);
	}
};

FOUTPUTRANGE(0,23);


/*

7) Una línea en blanco

*/

console.log("");

/*

8) Una tabla similar de 1 a 21, pero solo con los impares no incluidos en el intervalo de 10 a 20: 
1 dec = 1 hex = 1 oct = 1 bin 
3 dec = 3 hex = 3 oct = 11 bin 
…… 
9 dec = 9 hex = 11 oct = 10101 bin 
21 dec = 15 hex = 25 oct = 10101 bin
 
Realizar el programa añadiendo una sentencia if…else en el bucle anterior, de forma que
solo se muestren por consola los números que cumplan el nuevo requisito.

*/

const FISODD = (number) => 
{
	return number % 2 != 0;
}

const FISININTERVAL = (number, min, max) =>
{
	return number >= min && number <=max;
}

const FOUTPUTRANGE2 = (min, max) =>
{
	for(let i = min ; i <= max ; i++){
		if(!FISININTERVAL(i, 10, 20) && FISODD(i)){
			FCONVERTNUMBERS(i);
		}
	}
}

FOUTPUTRANGE2(0,23);

/*

9) Una línea en blanco

*/

console.log("");

/*

10) La siguiente frase utilizando caracteres escapados para representar hola en chino: 
Hi in Chinese is written as: 嗨，你好吗. 
嗨，你好吗 se corresponde con los siguientes códigos UNICODE escapados:  
\u55e8\uff0c\u4f60\u597d\u5417

*/

console.log(`\u55e8\uff0c\u4f60\u597d\u5417`);

/*

11) Una línea en blanco

*/

console.log("");

/*

12) Finalizar con la siguiente línea:
“The program has finished”

*/
console.log("The program has finished")
