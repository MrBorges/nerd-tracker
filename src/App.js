import React from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import ListBand from './components/ListBand/ListBand';
import 'tachyons';

class App extends React.Component {

  constructor(){
  	super();
  	this.state= {
  		route: 'home',
  		wishList: []  		  		
  	}
  }


	addToWishList = (movie) => {

		let found = 0;

		if (!this.state.wishList.length){

			console.log('Empty list. Adding title...')
		this.state.wishList.push(movie)
		console.log('Array of wish list: ',this.state.wishList)
		found++
			} else {
				    for (let item of this.state.wishList){
	  			if (item.imdbID === movie.imdbID){	
	  				console.log(`Comparing search: ${movie.Title}, ${movie.imdbID} to array item: ${item.Title}, ${item.imdbID}.`)
	  				console.log('This movie was already added before.')
	  				found++
	  				break
	  			} else {
	  				console.log(`Comparing search: ${movie.Title}, ${movie.imdbID} to array item: ${item.Title}, ${item.imdbID}.`)
	  				console.log('No match')		  						  				
	  			}	  			
		}
	}

		if (found === 0) {
			let joined = this.state.wishList.push(movie)
			this.setState({wishList: joined})
			console.log('Array of wish list: ',this.state.wishList)
	}
	}

  	

  

  render(){

	  return (
	  	<div>
	  		<div className="container flex">
	  			<h1>This is the App's wishList state length: {this.state.wishList.length}</h1>
		  		<SearchBox addToWishList={this.addToWishList}/>
		  		<ListBand wishList={this.state.wishList} />

	  		</div>

	    </div>
	  );

	}

}


export default App;
