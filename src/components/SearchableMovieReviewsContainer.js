import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: "",
    };
  }

  handleSubmit = (e, search) => {
    e.preventDefault();
    this.getReviews(search)
  };
  
  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={e => this.handleSubmit(e, this.state.searchTerm)}>
          <input onChange={this.handleChange} type="text" value={this.state.searchTerm} />
          <input type="submit" value="Search" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

  getReviews = (search) => {
    fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=gGVcQENQEc0WH53nqthnZzCR1vnP9cgn&query=${search}`
    )
      .then((r) => r.json())
      .then((j) => this.setState({ reviews: j.results }));
  };
}

export default SearchableMovieReviewsContainer;
