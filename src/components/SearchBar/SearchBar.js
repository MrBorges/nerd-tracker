import React from 'react';

class SearchBar extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			searchTerm: ''
		}
	}

	onInputChange = (event) => {
		const { target: { name, value } } = event
		this.setState( {[name]: value} );
		console.log(this.state.searchTerm);		
	}

	keyPressed = (event) =>{
		if (event.key === 'Enter'){
			console.log('Pressed enter key')
			this.props.loadTitle(this.state.searchTerm)
		}
	}

	render(){
		return (
				<div className='center'> 					
					  <div className="center pa4 black-80 measure">					    
					    <input id="searchTerm" name="searchTerm" 
					    	   className="br-pill input-reset ba b--black-20 pa3 mb2 db w-100" 
					    	   type="text" 
					    	   aria-describedby="name-desc" 
					    	   placeholder="Enter Movie or TV Show title ..."
					    	   onChange={this.onInputChange}
					    	   onKeyPress={this.keyPressed}/>
					    <small id="name-desc" className="f6 black-60 db mb2">Press enter to search.</small>
					  </div>

				</div>
			)
	}

}

export default SearchBar;