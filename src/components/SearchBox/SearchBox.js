import React from 'react';
import MovieCard from '../MovieCard/MovieCard.js';
import SearchBar from '../SearchBar/SearchBar.js';

class SearchBox extends React.Component {

	constructor(){
		super();
		this.state = {
			route: 'initial',
			movie: {}
			
		}
	}

	loadTitle = (searchString) => {

  		const source = 'http://www.omdbapi.com/?apikey=79e64c4e&t='

		fetch(source + searchString, {
			method: 'get'}).then(response => response.json())
				.then(movie => {
						this.setState({movie: movie})
						this.setState({route: 'touched'})
						console.log(this.state.movie)					
				})
  	}


  		  

  		
  				

	render(){		
			if (this.state.route === 'touched'){
				return(
					<div>
						<SearchBar loadTitle= {this.loadTitle}/>
						<MovieCard movie= {this.state.movie} addToWishList={this.props.addToWishList} />
						
					</div>
					)
				} else {
				return(
					<div>
						<SearchBar loadTitle= {this.loadTitle}/>						
					</div>)
				}
	}

}


export default SearchBox;