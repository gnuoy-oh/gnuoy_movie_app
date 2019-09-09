import React from 'react';
import PropTypes from "prop-types";
import "./Movie.css";

// state가 필요없는 경우 class 함수를 쓰지 않아도 된다.
function Movie({id, year, title, summary, poster , genres}){
	return <div className="movies_movie">
		{/* JS 안에서는 class => className으로 작성해야 한다. */}
		<img src={poster} alt={title} title={title} />
		<div className="movie_data">
			<h3 className="movie_title"> {title} </h3>
			<h5 className="movie_year"> {year} </h5>
			<ul className="genres">
				{genres.map((genre, index) => (
					// .key{index} => console에서 에러 발생한다.
					<li key={index} className="genres_list">
						{genre}
					</li>
				))}
			</ul>
			<p className="movie_summary"> {summary.slice(0,140)}...</p>
		</div>
	</div>
}

Movie.proptType = {
	id : PropTypes.number.isRequired,
	year: PropTypes.number.isRequired,
	title : PropTypes.string.isRequired,
	summary : PropTypes.string.isRequired,
	poster : PropTypes.string.isRequired,
	genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;