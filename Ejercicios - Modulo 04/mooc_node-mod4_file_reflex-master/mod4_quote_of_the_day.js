const quote_of_the_day = () => {
	
		let fs = require ("fs");		
		const file = "./mod4-quotes_of_the_day.json";
		
		const readFileCallback = (err, data) => {
			if(err){				
				throw err;
			}
			
			let deserializado = JSON.parse(data);
			let position = getRandomArbitrary(0, deserializado.length);
			console.log(deserializado[position]);
		};
		
		const getRandomArbitrary = (min, max) => {
		  return Math.floor(Math.random() * (max - min) + min);
		}
		
		fs.readFile(file, readFileCallback);
};

module.exports.quote_of_the_day = quote_of_the_day;

