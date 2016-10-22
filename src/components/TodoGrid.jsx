import React, { Component } from 'react';
import Localizar from './Localizar';
import Card from './Card';

class TodoGrid extends Component{
	render(){
		return(
			<div>
				<Localizar texto="Localizar tarefa"/>
				<Card titulo="Titulo legal"/>
			</div>
		);
	}
}

export default TodoGrid;