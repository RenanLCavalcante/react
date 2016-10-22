import React, { Component } from 'react';
import Localizar from './Localizar';
import Card from './Card';

class TodoGrid extends Component{
	
	state = {
		todos:[]
	}
	
	componentDidMount(){
		fetch('https://private-00cf6-reacttodo.apiary-mock.com/lista')
			.then(response => response.json())
			.then(response => {
				this.setState({
					todos: response
				})
			})
	}
	
	renderCards(){
		return this.state.todos.map(todo => {
			return <Card key={todo.id} 
			titulo={todo.titulo} />
		})
	}
	
	render(){
		return(
			<div>
				<Localizar texto="Localizar tarefa"/>
				{ this.renderCards() }
			</div>
		);
	}
}

export default TodoGrid;