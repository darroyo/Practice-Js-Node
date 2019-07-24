
const Sequelize = require('sequelize');

const options = { logging: false, operatorsAliases: false};
const sequelize = new Sequelize("sqlite:db.sqlite", options);

const person = sequelize.define(
  'person', 
  {  name: Sequelize.STRING,
     age: Sequelize.INTEGER
  }
);

sequelize.sync()
.then(() => person.count())
.then((count) => {
  if (count===0) {
    return ( 
      person.bulkCreate([
        { name: 'Peter', age: 22},
        { name: 'Anna', age: 23},
        { name: 'John', age: 30}
      ])
      .then( c => console.log(`  DB created with ${c.length} elems`))
    )
  } else {
    return console.log(`  DB exists & has ${count} elems`);
  }
})
.catch( err => console.log(`   ${err}`));

