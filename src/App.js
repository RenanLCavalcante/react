import React, { Component } from 'react';
import logo from './logo.svg';
import Localizar from './components/Localizar';
import Menu from './components/Menu';
import Card from './components/Card';

//clase
class App extends Component {
	//metodo
  render() {
    return (

		<div>
			<Menu/>
			{ this.props.children }
		</div>
	
    );
  }
}

//Qualquer outro arquivo pode usar a classe App
export default App;


