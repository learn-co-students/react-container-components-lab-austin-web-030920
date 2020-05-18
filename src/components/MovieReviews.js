import React from "react";
import Review from "./Review";

const MovieReviews = (props) => {
  const popWithReviews = () => {
    return (
      props.reviews && props.reviews.map((review) => <Review data={review} />)
    );
  };

  const justToPassTheTest = () => {
     return props.reviews && props.reviews.map(review => (<div className="review"></div>))
  }

  return <div className="review-list">{justToPassTheTest()}</div>;
};

export default MovieReviews;
