import React, { Component, PropTypes } from 'react';
import '../css/Localizar.css';

class Localizar extends Component{
	render() {
		return(
		 //sempre fechar as tags
		<form className="Localizar">
			<input type="localizar" placeholder={this.props.texto}/>
		</form>
		);
	}
}

Localizar.propTypes = {
	texto: PropTypes.string.isRequired
};

export default Localizar;