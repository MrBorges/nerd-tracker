import React from 'react';

const MovieCard = () => {

	const source = ''

	const fetchChars = async (char) =>{
	console.log(`${source}${char}`);
	let response = await window.fetch(`${source}${char}`);	
	let returnedChar = await response.json();
	for (let item of returnedChar.results){
		await fetchedChars.push(item)
	}
}

fetchChars('R2');

	return(
		<div>
			<a class="db center mw5 black link dim"
			   title="Frank Ocean's Blonde on Apple Music"
			   href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music">

			  <img class="db ba b--black-10"
			       alt="Frank Ocean Blonde Album Cover"
			       src="https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg"
			  />

			  <dl class="mt2 f6 lh-copy">
			    <dt class="clip">Title</dt>
			    <dd class="ml0 fw9">Blonde</dd>
			    <dt class="clip">Artist</dt>
			    <dd class="ml0 gray">Frank Ocean</dd>
			  </dl>
			</a>
		</div>
	)

}

export default MovieCard;