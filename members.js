//How i push team members inside this array i think

function TodoList() {
    this.todos = [];
  }
  
  TodoList.prototype.addTodo = function(text) {
    this.todos.push(new Todo(text));
  };
  
  TodoList.prototype.getNextTodo = function() {
    return this.todos[0];
  };
  
  TodoList.prototype.completeNextTodo = function() {
    return this.todos.shift();
  };
  
  module.exports = TodoList;
  

  //this was in a seperate folder in hmwk and its being pushed
  //into array above 
  //this is called a constructive function
  //it is storing the text on line 31
  //the function is saying if this .text is not equal to text or its empty
  // we will throw an error 
  function Todo(text) {
    if (typeof text !== "string" || !text.trim().length) {
      throw new Error("Expected parameter 'text' to be a non empty string");
    }
  
    this.text = text;
  }
  
  module.exports = Todo;
  