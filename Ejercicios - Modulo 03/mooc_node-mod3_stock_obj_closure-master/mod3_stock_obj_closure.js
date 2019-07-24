

function stock (title) {
    let    _title = title;//  Title of stock manager
    const _stock = {};   //  prods: { <code>: {c: code, desc: <description>,  n: <number>}
 
	const _titleF = () =>  {                     /* Returns title of stock manager */
		return _title; 
	};

	const _new_pF = (code, desc) => {             /* Adds n prods to stock */
		if (!_stock[code]) {
			_stock[code] = {code, desc, n:0};
			return _stock[code];
		};
		return null;
	};

	const _addF = (code, n)  =>{   /* if product exists add n and return product, else return null*/
		if (_stock[code]) {
			_stock[code].n += n;
			return _stock[code];
		}
		return null;
	};

		/* if n prods in stock subtract n and return product, else return null*/
	const _remF = (code, n)  =>{
		if ( _stock[code] && _stock[code].n >= n ) {
			_stock[code].n -= n;
			return _stock[code];
		} 
		return null;
	};

	const _numberF = ()  =>{    /* return nuber of prods (length of array of prod objects)  */
		return Object.keys(_stock).length;
	};

   const _get_pF = (code)  =>{       /* return product obj if exists or null if it doesn’t  */
		let element = _stock[code];
		
		return element ? element : null;
	};

				 /* if code exists eliminate it and return true, else return false  */
	const _del_pF = (code)  =>{
		let element = _stock[code];
		
		if(code in _stock){
			delete _stock[code];
		}
		
		return element ? element : null;
	};

			/* Add n to prod if code exists, or create new prod with json params*/
	const _addJSONF = (json_prods)   =>{
		let json_obj  = JSON.parse(json_prods);
		
		let json_obj_keys = Object.keys(json_obj);
		
		json_obj_keys.forEach(k => {
			let number = Number(json_obj[k].n);
			let desc = json_obj[k].desc ? String(json_obj[k].desc):"";
			let code = json_obj[k].code ? String(json_obj[k].code):k;
			
			if(code !== "" && Boolean(number) && _get_pF(code)){					
				_addF(code, number);
			}else if(code !== ""){
				_new_pF(code, desc);
				_addF(code, number);
			}
			
		});

	};

	const _getJSONF = ()  =>{  /* Add n to prod if code exists, or create new prod*/
		return JSON.stringify( _stock );
	};

	const _resetF = ()  =>{              /*   Remove all products from _stock */
		_stock = {}; 
	};
 
            /* Returns access object to internal variables, uses ES6 object method syntax */
    return {

        title  ()  {                     /* Returns title of stock manager */
            return _titleF(); 
        },

        new_p (code, desc) {             /* Adds n prods to stock */
            return _new_pF(code, desc);
        },

        add (code, n) {   /* if product exists add n and return product, else return null*/
            return _addF(code, n);
        },

            /* if n prods in stock subtract n and return product, else return null*/
        rem (code, n) {
            return _remF(code, n);
        },

        number () {    /* return nuber of prods (length of array of prod objects)  */
            return _numberF();
        },

       get_p (code) {       /* return product obj if exists or null if it doesn’t  */
			return _get_pF(code);
        },

                     /* if code exists eliminate it and return true, else return false  */
        del_p (code) {
			return _del_pF(code);
        },

                /* Add n to prod if code exists, or create new prod with json params*/
        addJSON (json_prods)  {
            return _addJSONF(json_prods);

        },

        getJSON () {  /* Add n to prod if code exists, or create new prod*/
            return _getJSONF();
        },

        reset () {              /*   Remove all products from _stock */
            return _resetF();
        }
    }
}

module.exports = {stock};

/*
//	Test
console.log("*************************************************************");
console.log("*			MY TEST											 *");
console.log("*************************************************************");

//	Init
let myStock = stock("Test stock");
console.log("Init: 		"+ myStock.title());

//	new_p
let newElement = 
	myStock.new_p("Code 1", "Product number 1 description");
console.log("new_p: 	"+ JSON.stringify(newElement));

//	add
let addElement = 
	myStock.add("Code 1",3);
	
console.log("add: 		"+ JSON.stringify(addElement));

//	rem
let remElement = 
	myStock.rem("Code 1",2);
	
console.log("rem: 		"+ JSON.stringify(remElement));

//	number
let numberElement = 
	myStock.number();
	
console.log("number: 	"+ numberElement);

//	get_p
let get_p = 
	myStock.get_p("No exists");
	
console.log("get_p (1): 	"+ JSON.stringify(get_p));	

get_p = 
	myStock.get_p("Code 1");
	
console.log("get_p (2): 	"+ JSON.stringify(get_p));	

//	del_p
let del_p =
	myStock.del_p("No exists");
	
console.log("del_p (1): 	"+ JSON.stringify(del_p));	

del_p =
	myStock.del_p("Code 1");
	
console.log("del_p (1): 	"+ JSON.stringify(del_p));

get_p = 
	myStock.get_p("Code 1");
	
console.log("get_p (2): 	"+ JSON.stringify(get_p));	

//	addJSON
console.log("addJSON: " + myStock.getJSON());	
myStock.addJSON('{	"a1":{"n":2},	"a2":{"code":"a2",	"desc":"knife",	"n":	3}}');	
console.log("addJSON: " + myStock.getJSON());	
myStock.addJSON('{	"a1":{"n":2},	"a2":{"code":"a2",	"desc":"knife",	"n":	3}}');	

console.log("addJSON: " + myStock.getJSON());




//	Test
console.log("*************************************************************");
console.log("*			THEIR TEST										 *");
console.log("*************************************************************");
let	my_shop	=	stock	("My	shop");	
console.log();	
my_shop.new_p('a1',	'fork');	
my_shop.add('a1',	3);	
my_shop.new_p('a4',	'spoon');	
my_shop.add('a4',	7);	
console.log("->	my_shop.new_p('a1',	'fork')");	
console.log("->	my_shop.add('a1',	3)");	
console.log("->	my_shop.new_p('a4',	'spoon')");	
console.log("->	my_shop.add('a4',	7)");	
console.log();	
console.log("There	are	"	+	my_shop.number()	+	"	prods");	
console.log();	
console.log("_stock=	"	+	my_shop.getJSON());	
console.log();	
console.log();	
my_shop.addJSON('{	"a1":{"n":2},	"a2":{"code":"a2",	"desc":"knife",	"n":	3}}');	
console.log(`->	my_shop.addJSON('{	"a1":{"n":2},	"a2":{"code":"a2",	"desc":"knife",	"n":	3}}'`);	
console.log();	
console.log("_stock=	"	+	my_shop.getJSON());	
console.log();	
console.log();	
my_shop.add('a1',	4);	
console.log("->	my_shop.add('a1',	4)");	
console.log();	
console.log("_stock['a1']	=	"	+	JSON.stringify(my_shop.get_p('a1')));	
console.log();	
console.log();	
my_shop.rem('a2',	3);	
my_shop.del_p('a4');	
console.log("->	my_shop.rem('a2',	3)");	
console.log("->	my_shop.del_p('a4')");	
console.log();	
console.log("_stock=	"	+	my_shop.getJSON());	

//	Test
console.log("*************************************************************");
console.log("*			THEIR TEST 2									 *");
console.log("*************************************************************");


let shop = stock("My Shop");
console.log(shop.getJSON());
shop.addJSON('{ "spoon":{"n":2, "code":5}, "knife":{"n": 3, "code":9} }');
const input = `shop.addJSON('{ "spoon":{"n":2, "code":5}, "knife":{"n": 3, "code":9} }');`;
console.log(shop.getJSON());
console.log(shop.getJSON());

*/