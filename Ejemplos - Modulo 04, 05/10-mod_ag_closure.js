
module.exports = function agenda (title, init) {
  let _title = title;
  let _content = init;

  return {
    title: function()           { return _title; },
    add:   function(nombre, tf) { _content[nombre]=tf; },
    tf:     function(nombre)    { return _content[nombre]; },
    remove: function(nombre)    { delete _content[nombre]; },
    toJSON:   function()       { return JSON.stringify(_content);},
    fromJSON: function(agenda) { Object.assign(_content, JSON.parse(agenda));}
  }
}

