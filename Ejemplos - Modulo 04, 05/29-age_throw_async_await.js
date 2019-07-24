
async function f() {
  
  async function db() { return ([ {name:'Peter', age:22}, 
                                  {name:'Anna',  age:23}, 
                                  {name:'John',  age:30}
                               ])
  }

  let people = await db (); 
  let person = people.find(p => p.name === process.argv[2])

  if (!person) throw "  '" + process.argv[2] + "' is not in DB";

  console.log("  " + person.name + " is " + person.age + " years old")
}

f().catch(err => console.log("Error: " + err))

