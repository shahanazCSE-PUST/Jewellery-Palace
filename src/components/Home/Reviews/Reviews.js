import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews,setReviews] = useState([])
    useEffect(() => {
        fetch('https://mysterious-wildwood-35872.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews((data.slice(0,6)));
                console.log(data);
            });
    }, [])
    return (
        <div>
            <h2 className="tittle-text my-5"> Customer <span className="span-color">Says</span></h2>
            <div className="review-container container">
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review> )
                }
                
            </div>
        </div>
    );
};

export default Reviews;