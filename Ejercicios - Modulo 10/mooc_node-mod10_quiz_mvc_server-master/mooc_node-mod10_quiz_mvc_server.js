
const express = require('express');
const app = express();

   // Import MW for parsing POST params in BODY

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

   // Import MW supporting Method Override with express

var methodOverride = require('method-override');
app.use(methodOverride('_method'));


   // MODEL

const Sequelize = require('sequelize');

const options = { logging: false, operatorsAliases: false};
const sequelize = new Sequelize("sqlite:db.sqlite", options);

const quizzes = sequelize.define(  // define table quizzes
    'quizzes',     
    {   question: Sequelize.STRING,
        answer: Sequelize.STRING
    }
);

sequelize.sync() // Syncronize DB and seed if needed
.then(() => quizzes.count())
.then((count) => {
    if (count===0) {
        return ( 
            quizzes.bulkCreate([
                { id: 1, question: "Capital of Italy",    answer: "Rome" },
                { id: 2, question: "Capital of France",   answer: "Paris" },
                { id: 3, question: "Capital of Spain",    answer: "Madrid" },
                { id: 4, question: "Capital of Portugal", answer: "Lisbon" }
            ])
            .then( c => console.log(`  DB created with ${c.length} elems`))
        )
    } else {
        return console.log(`  DB exists & has ${count} elems`);
    }
})
.catch( err => console.log(`   ${err}`));


   // VIEWs

const index = (quizzes) => `<!-- HTML view -->
<html>
    <head><title>MVC Example</title><meta charset="utf-8"></head> 
    <body> 
        <h1>MVC: Quizzes</h1>
		
	
		<table>`
+ quizzes.reduce(
    (ac, quiz) => ac += 
`       <tr>
		<td><a href="/quizzes/${quiz.id}/play">${quiz.question}</a></td>
        <td><a href="/quizzes/${quiz.id}/edit"><button>Edit</button></a></td>
        <td>		
			<form style="display: inline" method="post" action="/quizzes/${quiz.id}?_method=DELETE" onSubmit="return confirm('Delete: ${quiz.question}')">
				<input type="submit" value="Delete">
			</form>		   
	   </td>
        </tr>`, 
    ""
)
+ `     
		</table>
		<p/>
        <a href="/quizzes/new"><button>New Quiz</button></a>
    </body>
</html>`;

const play = (id, question, response) => `<!-- HTML view -->
<html>
    <head>
	
	<title>MVC Example</title><meta charset="utf-8">
	<script
			  src="https://code.jquery.com/jquery-3.4.1.min.js"
			  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
			  crossorigin="anonymous"></script>
			  
	<script type="text/javascript">
			$(function() {
				$("#div").hide();
				let myForm = $("#myForm");
				
				$("#sendButton").on("click", function(){
					
					let response = $("#response").val();
					
					$.ajax({
						type: myForm.attr("method"),
						url: myForm.attr("action") + "?response=" + response,
						success: function(res){
							$("#msg").html(res);
							$("#div").show();
						},
						error: function(XMLHttpRequest, textStatus, errorThrown) {
							alert.error(errorThrown);
						}
					});
				});
			});
		
	</script>
	</head> 
    <body>
        <h1>MVC: Quizzes</h1>
        <form   id="myForm" method="get"   action="/quizzes/${id}/check">
            ${question}: 
			<p>
				<input type="text" id="response" name="response" value="${response}" placeholder="Answer" />
				<input id="sendButton" type="button" value="Check"/> <br>
			</p>
		</form>        
		<div id="div"><strong id="msg"></strong></div>
        <a href="/quizzes"><button>Go back</button></a>
    </body>
</html>`;

/*

const check = (id, msg, response) => `<!-- HTML view -->
<html>
    <head><title>MVC Example</title><meta charset="utf-8"></head> 
    <body>
        <h1>MVC: Quizzes</h1>
        <strong><div id="msg">${msg}</div></strong>
        <p>
        <a href="/quizzes"><button>Go back</button></a>
        <a href="/quizzes/${id}/play?response=${response}"><button>Try again</button></a>
    </body>
</html>`;

*/

const quizForm =(msg, method, action, question, answer) => `<!-- HTML view -->
<html>
    <head><title>MVC Example</title><meta charset="utf-8"></head> 
    <body>
        <h1>MVC: Quizzes</h1>
        <form   method="${method}"   action="${action}">
            ${msg}: <p>
            <input  type="text"  name="question" value="${question}" placeholder="Question" />
            <input  type="text"  name="answer"   value="${answer}"   placeholder="Answer" />
            <input  type="submit" value="${msg}"/> <br>
        </form>
        </p>
        <a href="/quizzes"><button>Go back</button></a>
    </body>
</html>`;


   // CONTROLLER

// GET /, GET /quizzes
const indexController = (req, res, next) => {
 
    quizzes.findAll()
    .then((quizzes) => res.send(index(quizzes)))
    .catch((error) => `DB Error:\n${error}`);
}

//  GET  /quizzes/1/play
const playController = (req, res, next) => {
    let id = Number(req.params.id);
    let response = req.query.response || "";

    quizzes.findByPk(id)
    .then((quiz) => res.send(play(id, quiz.question, response)))
    .catch((error) => `A DB Error has occurred:\n${error}`);
 };

//  GET  /quizzes/1/check
const checkController = (req, res, next) => {
    let response = req.query.response;
    let id = Number(req.params.id);
	let msg = "";
    quizzes.findByPk(id)
    .then((quiz) => {
        msg = (quiz.answer===response) ?
              `<span style="color: green;">Yes, "${response}" is the ${quiz.question}</span>` 
            : `<span style="color: red;">No, "${response}" is not the ${quiz.question}</span>`;
		return res.send(msg);
    })
    .catch((error) => `A DB Error has occurred:\n${error}`);
};


// GET /quizzes/new
const newController = (req, res, next) => {

    res.send(quizForm("Create new Quiz", "post", "/quizzes", "", ""));
 };

// POST /quizzes
const createController = (req, res, next) => {
    let {question, answer} = req.body;

    quizzes.build({question, answer})
    .save()
    .then((quiz) => res.redirect('/quizzes'))
    .catch((error) => `Quiz not created:\n${error}`);
 };
 
// GET /quizzes/3/edit
 const editController = (req, res, next) => {
	//	Obtenemos pregunta
    let id = Number(req.params.id);
	
	quizzes.findByPk(id)
    .then((quiz) => {
        return res.send(quizForm("Edit Quiz", "post", `/quizzes/${id}/update?_method=PUT`, quiz.question, quiz.answer));
    })
    .catch((error) => `A DB Error has occurred:\n${error}`);	
    
 };
 
 //  PUT /quizzes/1
const updateController = (req, res, next) => {

    let question = req.body.question;
	let answer = req.body.answer;
	
    let id = Number(req.params.id);

	console.log(question + " - "+answer + " - " + id)
	quizzes.findByPk(id).then((p)=>{
		if (p === null) {
			throw new Error(`[updateController] El valor del parámetro id no es válido.`);
		}
		
		p.question = question;
		p.answer = answer;
		
		p.save().then((model)=>{
			res.redirect('/quizzes');
		});
	}).catch(err => console.error(" Error update " + err));    
};

//  PUT /quizzes/1
const destroyController = (req, res, next) => {
	
	let id = Number(req.params.id);

     quizzes.findByPk(id).then((p)=>{
		if (p === null) {
			throw new Error(`[updateController] El valor del parámetro id no es válido.`);
		}
		
		p.destroy().then((e)=>{
			res.redirect('/quizzes');
		});	
	}).catch(err => {throw err});
};



   // ROUTER

app.get(	['/', '/quizzes'],    	indexController);
app.get(	'/quizzes/:id/play',  	playController);
app.get(	'/quizzes/:id/check', 	checkController);
app.get(	'/quizzes/:id/edit', 	editController);
app.put(	'/quizzes/:id/update', 	updateController);
app.delete(	'/quizzes/:id', 		destroyController);
app.get(	'/quizzes/new',       	newController);
app.post(	'/quizzes',          	createController);

    // ..... instalar los MWs asociados a
    //   GET  /quizzes/:id/edit,   PUT  /quizzes/:id y  DELETE  /quizzes/:id


app.all('*', (req, res) =>
    res.send("Error: resource not found or method not supported")
);        


   // Server started at port 8000

app.listen(8000);

