
// new Date().getHours(): hour of the day (0-23h)

let hour = new Date().getHours();
let greeting = "\n Good afternoon";

if (hour < 12) {
    greeting = "\n Good morning";
} 

console.log(`${greeting}, its ${hour} hours`);

