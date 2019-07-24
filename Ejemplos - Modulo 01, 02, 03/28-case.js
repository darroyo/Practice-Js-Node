
// Math.round(Math.random()*10):
// entero aleatorio entre 0 y 9

let result = Math.round(Math.random()*10);

switch (result) {
  case 9:
    console.log("\n You win the first prize!");
	break;
  case 8:
  case 7:
    console.log("\n You win the second prize!");
	break;
  default:
    console.log("\n Sorry, no prize!");
} 

