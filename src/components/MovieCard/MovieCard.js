import React from 'react';

class MovieCard extends React.Component {

	constructor(){
		super();
		this.state = {
			movie: {}
		}
	}	

	fetchMovie = () => {

		const source = 'http://www.omdbapi.com/?apikey=79e64c4e&t='

		fetch(source + 'Home+Alone', {
			method: 'get'}).then(response => response.json())
				.then(movie => {
					this.setState({movie: movie})
					console.log(this.state.movie)
				})
		}
	render(){
			return(
				<div>
					<div className="db center mw5 black link dim">					  
		
					  <img className="db ba b--black-10"
					       alt="Frank Ocean Blonde Album Cover"
					       src={this.state.movie.Poster}
					       onClick={ this.fetchMovie }
					  />
		
					  <dl className="mt2 f6 lh-copy">
					    <dt className="clip">Title</dt>
					    <dd className="ml0 fw9">Blonde</dd>
					    <dt className="clip">Artist</dt>
					    <dd className="ml0 gray">Frank Ocean</dd>
					  </dl>
					</div>
				</div>
			)}

}

export default MovieCard;