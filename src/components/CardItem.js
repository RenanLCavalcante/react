import React, { Component } from 'react';

class CardItem extends Component{
	render(){
		return(
			<div className="Lista">
				 <ul>
					<li>
						<input type="checkbox"/>Apenas 1 card item por enquanto se aplica a todos os cards
					</li>
				</ul>
			</div>
		);
	}
}

export default CardItem;