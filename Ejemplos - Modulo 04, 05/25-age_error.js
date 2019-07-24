
try { 
  let people = [{name:'Peter', age:22}, 
                {name:'Anna',  age:23}, 
                {name:'John', age:30}];

  let person = people.find(p => p.name === process.argv[2]);

  console.log("  Age of " + person.name + " is " + person.age);

} catch (err) {console.log("  '" + process.argv[2] + "' not in DB");}

