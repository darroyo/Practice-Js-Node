
class Agenda {
  constructor (title, init) {
    this.title = title;
    this.content = init;
  };
  
  title()       { return this.title; };
  add(name, tf) { this.content[name]=tf; };
  tf(name)      { return this.content[name]; };
  remove(name)  { delete this.content[name]; };
  toJSON()         { return JSON.stringify(this.content);};
  fromJSON(agenda) { Object.assign(this.content, JSON.parse(agenda));};
}
let friends = new Agenda ("friends",
	                        { Peter: 913278561,
	                          John:  957845123
	                        });
friends.add("Mary", 978512355);

let work = new Agenda ("Work", {});
work.fromJSON('{"Peter Tobb": 913278561, "Paul Smith": 957845123}');

console.log('Peter: ' + friends.tf("Peter"));
console.log('Mary:  ' + friends.tf("Mary"));
console.log('Edith: ' + friends.tf("Edith"));
console.log();
console.log('Peter Tobb:  ' + work.tf("Peter Tobb"));
console.log('Work agenda: ' + work.toJSON());

