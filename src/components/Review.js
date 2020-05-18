import React from 'react';

const Review = (props) => {
    return (
        <div className="review">
            {/* {console.log(props.data)} */}
            <h1>{props.data.headline}</h1>
            <h2>By: {props.data.byline}</h2>
            <p>Published: {props.data.publication_date}</p>
            <p>{props.data.summary_short}</p>
            <br />
        </div>
    );
};

export default Review;