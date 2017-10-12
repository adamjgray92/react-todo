var $ = require('jquery');

module.exports = {
  setTodos: function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    // Check if valid object/array
    try{
      todos = JSON.parse(stringTodos);
    }catch(e){
      console.log(e);
    }

    // Check if it's an array
    return $.isArray(todos) ? todos : []; 
  }
};
