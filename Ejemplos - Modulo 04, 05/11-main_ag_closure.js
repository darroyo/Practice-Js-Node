
const agenda = require('./10-mod_ag_closure');

let friends = agenda ("friends",
	                    { Peter: 913278561,
	                      John:  957845123
	                    });
friends.add("Mary", 978512355);

let work = agenda ("Work", {});
work.fromJSON('{"Peter Tobb": 913278561, "Paul Smith": 957845123}');

console.log('Peter: ' + friends.tf("Peter"));
console.log('Mary:  ' + friends.tf("Mary"));
console.log('Edith: ' + friends.tf("Edith"));
console.log();
console.log('Peter Tobb:  ' + work.tf("Peter Tobb"));
console.log('Work agenda: ' + work.toJSON());

