import React from 'react';

class MovieCard extends React.Component {

	constructor(props){
		super(props);
		this.state = {			
		}
	}	

	render(){
			return(
				<div>
					<div className="db center mw5 black link dim">					  
		
					  <img className="db ba b--black-10"
					       alt="Title cover"
					       src={this.props.movie.Poster}					       
					  />
		
					  <dl className="mt2 f6 lh-copy">
					    <dt className="clip">Title</dt>
					    <dd className="ml0 fw9">{this.props.movie.Title} ({this.props.movie.Released})</dd>
					    <dt className="clip">Actors</dt>
					    <dd className="ml0 gray">{this.props.movie.Actors}</dd>
					    <dt className="clip">Plot</dt>
					    <dd className="ml0 gray">{this.props.movie.Plot}</dd>
					  </dl>
					</div>
				</div>
			)}

}

export default MovieCard;