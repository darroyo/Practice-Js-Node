const {log, biglog, errorlog, colorize} = require("./out");
const model = require('./model');
const file = "cmds.js";

const promiseFromQuizArray = (quizArray2, rl2, multiple2) => {
	
	let aciertos = 0;
	let quizArray = quizArray2;
	let rl = rl2;
	let multiple = multiple2;
	
	const fun = ()=>{
		
		//	Caso base
		if(quizArray.length===0){
			multiple && console.log(colorize("aciertos: "+aciertos, 'green'))
			multiple && console.log(colorize("fin", 'green'))
			rl.prompt();
			return;
		}

		new Promise((resolve, reject) => {
				
			let quizElement = quizArray[quizArray.length-1];
			quizArray.pop();
				
			rl.question(colorize(` ${quizElement.question}: `, 'magenta'), answer => {	
				answer.toLowerCase() === quizElement.answer.toLowerCase() ? resolve(`${quizElement.answer}`):reject(`${answer}`); 	
			})
			
		}).then(
			(ok) => {
				aciertos++;
				console.log(colorize("correct", 'green'));
				multiple && console.log(colorize("aciertos: "+aciertos, 'green'))
				fun(quizArray, rl, multiple);
			},
			(ko) => {
				console.log(colorize("incorrect", 'red'));
				multiple && console.log(colorize("aciertos: "+aciertos, 'green'));
				multiple && console.log(colorize("fin", 'green'));
				rl.prompt();
			}
		);
		
	};
	
	return fun;
};

/*

fun = Función ejecutar en caso OK

*/
const getByIdPrivate = (id, rl, fun) => {
	model.getByIndex(id).then((model)=>{
		fun(model);
	}).catch(err => {
		errorlog(err.message);
		rl.prompt();
	});
}

/**
 * Muestra la ayuda.
 *
 * @param rl Objeto readline usado para implementar el CLI.
 */
exports.helpCmd = rl => {
    log("Commandos:");
    log("  h|help - Muestra esta ayuda.");
    log("  list - Listar los quizzes existentes.");
    log("  show <id> - Muestra la pregunta y la respuesta el quiz indicado.");
    log("  add - Añadir un nuevo quiz interactivamente.");
    log("  delete <id> - Borrar el quiz indicado.");
    log("  edit <id> - Editar el quiz indicado.");
    log("  test <id> - Probar el quiz indicado.");
    log("  p|play - Jugar a preguntar aleatoriamente todos los quizzes.");
    log("  credits - Créditos.");
    log("  q|quit - Salir del programa.");
    rl.prompt();
};


/**
 * Lista todos los quizzes existentes en el modelo.
 *
 * @param rl Objeto readline usado para implementar el CLI.
 */
exports.listCmd = rl => {
    model.getAll().then((list) =>{
		list.forEach((quiz, index) => {
			log(` [${colorize(quiz.id, 'magenta')}]:  ${quiz.question}`);
		});
		rl.prompt();
	}).catch(err => console.error(file + " Error editCmd "+err));
};


/**
 * Muestra el quiz indicado en el parámetro: la pregunta y la respuesta.
 *
 * @param rl Objeto readline usado para implementar el CLI.
 * @param id Clave del quiz a mostrar.
 */
exports.showCmd = (rl, id) => {
    if (typeof id === "undefined") {
        errorlog(`Falta el parámetro id.`);
    } else {
        try {
			
			getByIdPrivate(id, rl, (quiz)=>{
				log(` [${colorize(id, 'magenta')}]:  ${quiz.question} ${colorize('=>', 'magenta')} ${quiz.answer}`);
				rl.prompt();
			});
            
        } catch(error) {
            errorlog(error.message);
        }
    }
    rl.prompt();
};


/**
 * Añade un nuevo quiz al módelo.
 * Pregunta interactivamente por la pregunta y por la respuesta.
 *
 * Hay que recordar que el funcionamiento de la funcion rl.question es asíncrono.
 * El prompt hay que sacarlo cuando ya se ha terminado la interacción con el usuario,
 * es decir, la llamada a rl.prompt() se debe hacer en la callback de la segunda
 * llamada a rl.question.
 *
 * @param rl Objeto readline usado para implementar el CLI.
 */
exports.addCmd = rl => {

    rl.question(colorize(' Introduzca una pregunta: ', 'red'), question => {

        rl.question(colorize(' Introduzca la respuesta ', 'red'), answer => {

            model.add(question, answer)
			.then(()=>{
				log(` ${colorize('Se ha añadido', 'magenta')}: ${question} ${colorize('=>', 'magenta')} ${answer}`);
				rl.prompt();
			})
			.catch(err => console.error("Error load "+err));            
        });
    });
};


/**
 * Borra un quiz del modelo.
 *
 * @param rl Objeto readline usado para implementar el CLI.
 * @param id Clave del quiz a borrar en el modelo.
 */
exports.deleteCmd = (rl, id) => {
    if (typeof id === "undefined") {
        errorlog(`Falta el parámetro id.`);
    } else {
		model.deleteByIndex(id).then(()=>{
			rl.prompt();
		}).catch(err => {
			errorlog(err.message);
			rl.prompt();
		});
    }
    
};


/**
 * Edita un quiz del modelo.
 *
 * Hay que recordar que el funcionamiento de la funcion rl.question es asíncrono.
 * El prompt hay que sacarlo cuando ya se ha terminado la interacción con el usuario,
 * es decir, la llamada a rl.prompt() se debe hacer en la callback de la segunda
 * llamada a rl.question.
 *
 * @param rl Objeto readline usado para implementar el CLI.
 * @param id Clave del quiz a editar en el modelo.
 */
exports.editCmd = (rl, id) => {
    if (typeof id === "undefined") {
        errorlog(`Falta el parámetro id.`);
        rl.prompt();
    } else {
        try {
			//	La línea de a continuación permite que solo si el stdout es una terminal
			//		se escriba el valor a editar, caso contrario no se escribe porque si la primera
			//		condición es false, no se ejecuta la segunda --> Perezoso
			
			//	Además el setTimeout manda a la cola la escritura de la pregunta de tal manera
			//		que esta línea se ejecuta después que la anterior:
			
			//	1, 2 - Dado que el timeout es un evento microtask, no se ejecuta inmediatamente y se ejecuta primero el b y después el c ya que ninguno son promesas y entran ANTES que los eventos (programa principal antes que eventos)
			
			//	3 - Después entraria a la cola la promesa con timeout 0
			
			//	4 - Finalmente, cuando el usuario escriba por teclado, se ejecutará el callback que es el que tiene el elemento 4º	
				
			getByIdPrivate(id, rl, (quiz)=>{
				
				process.stdout.isTTY && setTimeout(() => {
				/*console.log("a"); <-- El 3º */
				rl.write(quiz.question)
				},0);
				
				/*console.log("b"); <-- El 1º */ 
			
				rl.question(colorize(' Introduzca una pregunta: ', 'red'), question => {
					/*console.log("c"); <-- El 4º */
					getByIdPrivate(id, rl, (quiz)=>{
						process.stdout.isTTY && setTimeout(() => {
						/*console.log("a"); <-- El 3º */
						rl.write(quiz.answer)
						},0);
					});

					rl.question(colorize(' Introduzca la respuesta ', 'red'), answer => {
						model.update(id, question, answer).then((p)=>{
							log(` Se ha cambiado el quiz ${colorize(id, 'magenta')} por: ${question} ${colorize('=>', 'magenta')} ${answer}`);
							rl.prompt();
						})
						.catch(err => console.error(file + " Error editCmd "+err));
						
					});
				});
			/*console.log("d"); <-- El 2º */
			});
				
			
        } catch (error) {
            errorlog(error.message);
            rl.prompt();
        }
    }
};

/**
 * Prueba un quiz, es decir, hace una pregunta del modelo a la que debemos contestar.
 *
 * @param rl Objeto readline usado para implementar el CLI.
 * @param id Clave del quiz a probar.
 */
exports.testCmd = (rl, id) => {
    if (typeof id === "undefined") {
        errorlog(`Falta el parámetro id.`);
        rl.prompt();
    } else {
        try {
			getByIdPrivate(id, rl, (quiz)=>{
				let closure = promiseFromQuizArray([quiz], rl, true); 
				closure();
			});
            
        } catch (error) {
            errorlog(error.message);
            rl.prompt();
        }
    }
};


/**
 * Pregunta todos los quizzes existentes en el modelo en orden aleatorio.
 * Se gana si se contesta a todos satisfactoriamente.
 *
 * @param rl Objeto readline usado para implementar el CLI.
 */
exports.playCmd = rl => {
    log('Jugar.', 'red');
	
	try {
		//	Obternemos el quiz
		model.GetAllDisordered().then((list)=>{
			let closure = promiseFromQuizArray(list, rl, true); 
			closure();
		}).catch(err => console.error(file + " Error playCmd " + err));;
		
		
		
	} catch (error) {
		errorlog(error.message);
		rl.prompt();
	}
    
	
};


/**
 * Muestra los nombres de los autores de la práctica.
 *
 * @param rl Objeto readline usado para implementar el CLI.
 */
exports.creditsCmd = rl => {
    log('Autores de la práctica:');
    log('Daniel', 'green');
    rl.prompt();
};


/**
 * Terminar el programa.
 *
 * @param rl Objeto readline usado para implementar el CLI.
 */
exports.quitCmd = rl => {
    rl.close();
};

/**
 * Terminar el programa.
 *
 * @param rl Objeto readline usado para implementar el CLI.
 */
exports.load = rl => {
    return model.load()
	.then(()=>rl.prompt())
	.catch(err => console.error(file + " Error load "+err));
};

