// new Date().getHours(): hour del día (0-23h)

let hour = new Date().getHours();

if (hour < 12) {
    console.log(`\n Good morning, it's ${hour} hours`); 
} else {
    console.log(`\n Good afternoon, it's ${hour} hours`); 
}


