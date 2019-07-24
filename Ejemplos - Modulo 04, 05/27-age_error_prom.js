
Promise.resolve([{name:'Peter', age:22}, 
                 {name:'Anna',  age:23}, 
                 {name:'John',  age:30}]
)
.then( people => people.find(p => p.name === process.argv[2]))
.then( person => 
   console.log("  " + person.name + " is " + person.age + " years old")
)
.catch( err => console.log("  '" + process.argv[2] + "' is not in DB"));

