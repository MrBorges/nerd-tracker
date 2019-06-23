import React from 'react';
import MovieCard from './components/MovieCard/MovieCard';
import SearchBar from './components/SearchBar/SearchBar';
import 'tachyons';

class App extends React.Component {

  constructor(){
  	super();
  	this.state= {
  		route: 'home',
  		movie: {}
  	}
  }

  	loadTitle = (searchString) => {

  		const source = 'http://www.omdbapi.com/?apikey=79e64c4e&t='

		fetch(source + searchString, {
			method: 'get'}).then(response => response.json())
				.then(movie => {
					this.setState({movie: movie})
					console.log(this.state.movie)
				})

  	}

  

  render(){

	  return (
	  	<div>
	  		<SearchBar loadTitle= {this.loadTitle} />
	    	<MovieCard movie={this.state.movie}/>

	    </div>
	  );

	}

}


export default App;
