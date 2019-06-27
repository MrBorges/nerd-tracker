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

  	addToWishList = (movie) => {

  		let found = 0;

  		if (!this.props.wishList.length){

  			console.log('Empty list. Adding title...')
			this.props.wishList.push(movie)
			console.log('Array of wish list: ',this.props.wishList)
			found++
  			} else {
  				    for (let item of this.props.wishList){
		  			if (item.imdbID === movie.imdbID){
		  				console.log(`Comparing search: ${movie.Title}, ${movie.imdbID} to array item: ${item.Title}, ${item.imdbID}.`)
		  				console.log('This movie was already added before.')
		  				found++
		  			} else {
		  				console.log(`Comparing search: ${movie.Title}, ${movie.imdbID} to array item: ${item.Title}, ${item.imdbID}.`)
		  				console.log('No match')		  						  				
		  			}	  			
			}
		}

		if (found === 0) {
			this.props.wishList.push(movie)
			console.log('Array of wish list: ',this.props.wishList)
		}
	}
  		  

  		
  				

	render(){		
			if (this.state.route === 'touched'){
				return(
					<div>
						<SearchBar loadTitle= {this.loadTitle}/>
						<MovieCard movie= {this.state.movie} addToWishList={this.addToWishList} />
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