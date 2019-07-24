

//	1 - sequelize definición
const Sequelize = require('sequelize');

//		Eliminamos trazas por consola
const options = {logging: false, operatorsAliases: false}

//		Conexión
const sequelize = new Sequelize("sqlite:db.myDb", options)

//	2 - Definición / creación de tablas, ojo, lo pasa a plural el nombre de la tabla, sino lo quisiéramos, usar  freezeTableName: true en options

//	Esta sentencia permite crear la tabla si no existe o, si existe, simplemente permite acceder a los datos

//		La estructura creada es: id,name,age,createdAt,updatedAt
//		https://sequelize.readthedocs.io/en/2.0/docs/models-definition/ 
const person = sequelize.define(
	'person',
	{
		name: Sequelize.STRING,
		age: Sequelize.INTEGER		
	}
);

//	3 - Listado
person.findAll().then((people)=>{
	people.forEach((p)=>{console.log("Person "+p.name + " age "+p.age+" id "+p.id)});
}).catch(err=>console.log(err));

/*

Person Name 1 age 1 id 1
Person Name 2 age 2 id 2
Person Name 3 age 3 id 3

*/