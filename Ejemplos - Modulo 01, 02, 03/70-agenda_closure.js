
function agenda (title, init) {
  let _title = title;
  let _content = init;

  return {
    title:  function()           { return _title; },
    add:    function(nombre, tf) { _content[nombre]=tf; },
    tf:     function(nombre)     { return _content[nombre]; },
    remove: function(nombre)     { delete _content[nombre]; },
    toJSON:   function()       { return JSON.stringify(_content);},
    fromJSON: function(agenda) { Object.assign(_content, JSON.parse(agenda));}
  }
}
let friends = agenda ("friends",
	                    { Peter: 913278561,
	                      John:  957845123
	                    });
friends.add("Mary", 978512355);

let work = agenda ("Work", {});
work.fromJSON('{"Peter Tobb": 913278561, "Paul Smith": 957845123}');

console.log('Peter: ' + friends.tf("Peter"));
console.log('Mary:  ' + friends.tf("Mary"));
console.log('Edith: ' + friends.tf("Edith"));
console.log();
console.log('Peter Tobb:  ' + work.tf("Peter Tobb"));
console.log('Work agenda: ' + work.toJSON());

