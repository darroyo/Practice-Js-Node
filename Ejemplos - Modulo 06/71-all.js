
const Sequelize = require('sequelize');

const options = { logging: false, operatorsAliases: false};
const sequelize = new Sequelize("sqlite:db.sqlite", options);

const person = sequelize.define(
  'person', 
  {  name: Sequelize.STRING,
     age: Sequelize.INTEGER
  }
);

person.findAll()
  .then( people => 
    people.forEach(p => console.log(`    ${p.name} is ${p.age} years old`))
  )
  .catch( err => console.log(err));

