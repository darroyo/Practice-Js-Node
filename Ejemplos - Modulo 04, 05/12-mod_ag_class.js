
function Agenda (title, init) {
  this.title = title;
  this.content = init;
};
Agenda.prototype = {
  title: function()          { return this.title; },
  add:   function(name, tf)  { this.content[name]=tf; },
  tf:     function(name)     { return this.content[name]; },
  remove: function(name)     { delete this.content[name]; },
  toJSON:  function()        { return JSON.stringify(this.content);},
  fromJSON: function(agenda) { Object.assign(this.content, JSON.parse(agenda));}
}
module.exports = Agenda;

