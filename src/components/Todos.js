import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
class Todos extends Component {
   
    render() {
        return this.props.todos.map((todo) => // tao ham moi va su dung ham moi, old funtion still khong thay doi gia tri
            (
                <TodoItem key={todo.id} todo={todo} markComplete={
                    this.props.markComplete}  delTodo={this.props.delTodo}
                > </TodoItem>
            )
        );

    }
}



export default Todos;

Todos.propTypes =
{
    todos: PropTypes.array.isRequired
}

