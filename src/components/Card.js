import React, { Component, PropTypes } from 'react';
import CardItem from './CardItem';
import '../css/Card.css';

class Card extends Component{
	render(){
		return(
			<div className="Card">
				<h2>{this.props.titulo}</h2>
				<CardItem />
			</div>
		);
	}
}

Card.propTypes = {
	titulo:PropTypes.string.isRequired
};

export default Card;