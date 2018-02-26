import React, { Component } from 'react';
import Header from './components/header';
import TodoInput from './components/todo-input';
import TodoItem from './components/TodoItem';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
todos :[
  {id:0, text:"meet me in the evening" },
  {id:1, text:"get the work done by tomorrow"},
  {id:2,text:"call mom"}
],
nextId:3
    }
    this.addTodo=this.addTodo.bind(this);
    this.removeTodo=this.removeTodo.bind(this);

  }
  addTodo(todoText){
    let todos=this.state.todos.slice();
    todos.push({id:this.state.nextId, text: todoText});
    this.setState({
      todos:todos,
      nextId:++this.state.nextId
    });
  }
  removeTodo(id){
 this.setState({
   todos:this.state.todos.filter((todo,index)=>todo.id!==id)
 });
  }

  render() {
    return (
      <div className="App">
      <div className="wrapper">
      <Header />
      <TodoInput todoText="" addTodo={this.addTodo} />
      <ul>
        {
          this.state.todos.map((todo)=>{
            return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
          })
          
        }
        </ul>
      </div>
      </div>
    );
  }
}

export default App;
