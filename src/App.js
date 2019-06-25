import React from 'react';
//import MovieCard from './components/MovieCard/MovieCard';
//import SearchBar from './components/SearchBar/SearchBar';
import SearchBox from './components/SearchBox/SearchBox';
import 'tachyons';

class App extends React.Component {

  constructor(){
  	super();
  	this.state= {
  		route: 'home',
  		wishList: []  		  		
  	}
  }

  	

  

  render(){

	  return (
	  	<div>

	  		<SearchBox wishList={ this.state.wishList }/>

	    </div>
	  );

	}

}


export default App;
