import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
    };
  }

  componentDidMount(){
      this.getReviews();
  }

  render() {
    //   console.log(this.state)
    return <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
    </div>;
  }

  getReviews = () => {
    fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=gGVcQENQEc0WH53nqthnZzCR1vnP9cgn")
      .then((r) => r.json())
      .then((j) => this.setState({reviews: j.results}))
  };
}

export default LatestMovieReviewsContainer;
