/**
 *  Variables generales
 */
const Sequelize = require("sequelize");
const seqOptions = {logging: false, operatorsAliases: false};
const sequelize = new Sequelize("sqlite:quizzes.sqlite", seqOptions);

const ut = require("./utilities");
const file = "model.js";
/**
 *  Modelo inicial para cargar en BBDD si no existiese tabla
 */
const quizzesIni = [
    {
        question: "Capital de Italia",
        answer: "OK"
    },
    {
        question: "Capital de Francia",
        answer: "OK"
    },
    {
        question: "Capital de España",
        answer: "OK"
    },
    {
        question: "Capital de Portugal",
        answer: "OK"
    },
	{
		
		question: "Answer Number 1",
        answer: "OK"
	}
];

const quizz = sequelize.define(
	"quizz",
	{
		question: Sequelize.STRING,
        answer: Sequelize.STRING
	}
);


/**
    Crea la BBDD en caso de que no exista con los valores por defecto
 
	@returns Promise
 */
exports.load = () => {
	
	return sequelize.sync()
	.then(()=>{
		return quizz.count();
	})
	.then((numberOfQuizzes)=>{
		
		if(!numberOfQuizzes || numberOfQuizzes === 0){
			 //      Importante el return, es cumplir la promesa OK (recordatorio de promesas). Además permite esperar a que las 2 promesas se cumplan, no solo la del bulk create. Para que la promesa del then espere a que estas terminen.

			return quizz.bulkCreate(quizzesIni)
				/*.then((c)=>{
					console.log(`  DB created with ${c.length} elems`);
				})*/		
		}else{
			//	Aquí también es importante el return, hace que la promesa se cumpla
			return; // console.log("La BBDD tiene "+numberOfQuizzes+" registros");
		}
		
	}).catch(err => console.error(file + " Error load "+err));
	
};

//
/**
 * Devuelve el número total de preguntas existentes.
 *
 * @returns {number} número total de preguntas existentes. 
 */
exports.count = () => quizz.count();


/**
 * Añade un nuevo quiz.
 *
 * @param question String con la pregunta.
 * @param answer   String con la respuesta.
 
 @returns Promise
 
 
 */
exports.add = (question, answer) => {

    return quizz.create({question, answer})
	/*.then(()=>{
		console.log("Created");
	})*/
	.catch(err => console.error(file + " Error add"));
};



/**
 * Actualiza el quiz situado en la posicion index.
 *
 * @param id       Clave que identifica el quiz a actualizar.
 * @param question String con la pregunta.
 * @param answer   String con la respuesta.
 
  @returns Promise
 */
exports.update = (id, question, answer) => {

    return quizz.findByPk(id).then((p)=>{
		if (p === null) {
			throw new Error(`El valor del parámetro id no es válido.`);
		}
		
		p.question = question;
		p.answer = answer;
		
		return p.save().then((model)=>{
			return;
		});
	}).catch(err => console.error(file + " Error update " + err));
};

/**
 * Devuelve todos los quizzes existentes.
 *
 * Devuelve un clon del valor guardado en la variable quizzes, es decir devuelve un
 * objeto nuevo con todas las preguntas existentes.
 * Para clonar quizzes se usa stringify + parse.
 *
 * @returns Promise
 
 */
exports.getAll = () => {
	
	return quizz.findAll().then((list)=>{
		return JSON.parse(JSON.stringify(list));
	}).catch(err => console.error(file + " Error getAll " + err));
};

/**
 * Devuelve todos los quizzes existentes DESORDENADOS.
 *
 * Devuelve un clon del valor guardado en la variable quizzes, es decir devuelve un
 * objeto nuevo con todas las preguntas existentes DESORDENADOS.
 * Para clonar quizzes se usa stringify + parse.
 *
 * @returns Promise
 */
exports.GetAllDisordered = () => {
	return this.getAll().then((list)=>{
		return ut.disorderArray(list);
	}).catch(err => console.error(file + " Error GetAllDisordered " + err));
};

/**
 * Devuelve un clon del quiz almacenado en la posición dada.
 *
 * Para clonar el quiz se usa stringify + parse.
 *
 * @param id Clave que identifica el quiz a devolver.
 
 * @returns Promise with copy of the model model
 */
exports.getByIndex = id => {
	
	return quizz.findByPk(id).then((p)=>{
		if (p === null) {
			throw new Error(`El valor del parámetro id no es válido.`);
		}
		
		return JSON.parse(JSON.stringify(p));
		
	}).catch(err => {throw err});
};

//
/**
 * Elimina el quiz situado en la posición dada.
 *
 * @param id Clave que identifica el quiz a borrar.
 
 * @returns Promise
 */
exports.deleteByIndex = id => {

    return quizz.findByPk(id).then((p)=>{
		if (p === null) {
			throw new Error(`El valor del parámetro id no es válido.`);
		}
		
		return p.destroy().then((e)=>{
			return;
		});
		
		return
		
	}).catch(err => {throw err});
};