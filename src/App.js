import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Rout } from 'react-router-dom'

import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import { v4 as uuid } from 'uuid';


import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: uuid(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  };
  markComplete =  (id) => {
    
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id == id) {
        todo.completed = !todo.completed;
      }
      return todo;
    } ) });
  }
  // Delete
  delTodo = (id) =>  {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }
  addTodo = (title) =>
  {
    console.log(title);
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
    }
  render() {
    return (
      <Router>
        <div className="App">
        <div className="container">
        <Header />
          <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
        
      </div>
      </Router>
 
      );
    }
  }
  
  export default App;
  