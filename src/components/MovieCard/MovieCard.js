import React from 'react';

class MovieCard extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			wantList: [],
			watchedList: []
		}
	}	

	render(){

			if (this.props.movie.Response === 'True'){
				return(
								<div>
									<div className="db center mw5 black link shadow-4">					  
						
									  <img className="db ba b--black-10"
									       alt="Title cover"
									       src={this.props.movie.Poster}					       
									  />
									  <div className="flex justify-center ma2">
										  <i className="material-icons pl-10 pointer" onClick={ () => this.props.addToWishList(this.props.movie) } >list</i>
										  <i className="material-icons pl2 pointer">done_outline</i>
									  </div>	
									  <dl className="mt2 f6 lh-copy">
									    <dt className="clip">Title</dt>
									    <dd className="ml0 tc fw9">{this.props.movie.Title} ({this.props.movie.Released})</dd>
									    <dt className="">Actors</dt>
									    <dd className="ml0 gray">{this.props.movie.Actors}</dd>
									    <dt className="">Plot</dt>
									    <dd className="ml0 gray">{this.props.movie.Plot}</dd>
									  </dl>
									</div>
								</div>
						)
			} else {
				return(
					<div className="db center mw5 black link shadow-4">
						<h1>Too bad ... no records found.</h1>
					</div>
					)
			}
		}

}

export default MovieCard;