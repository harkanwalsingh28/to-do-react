import React from 'react';
import './TodoItem.css';

export default class TodoItem extends React.Component{
    constructor(props){
        super(props);
    
    }
    removeTodo(id){
        this.props.removeTodo(id);

    }

render(){
    return(
        <div className="wrapper">
        <button className="removeTodo" onClick={(e)=>e.removeTodo(this.props.id)}>Remove</button>{this.props.todo.text}
        </div>

    )
}
}