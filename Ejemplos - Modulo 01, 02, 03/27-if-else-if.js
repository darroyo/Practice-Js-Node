// (new Date()).getHours(): hora del día (0-23h)

let hour = new Date().getHours();
let greeting;

if (hour < 12) {
	greeting = "\n Good morning";
} else if (hour < 21) {
	greeting = "\n Good afternoon";
} else {
	greeting = "\n Good night";
} 

console.log(`${greeting}, its ${hour} hours`);

