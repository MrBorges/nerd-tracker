import React from 'react';
import MovieCard from '../MovieCard/MovieCard.js';

class ListBand extends React.Component {
	constructor(){
		super()
		this.state= {			
		}
	}	

	render(){
		
			return (
					<div>
						<h1>This is the ListBand's wishList props length: {this.props.wishList.length}</h1>
					</div>
				)
			 
			}				
	}


export default ListBand;