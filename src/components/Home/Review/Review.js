import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './Review.css';

const Review = ({ review }) => {
    const { name, description,rating } = review;
    return (
        <div className="review-card px-3">
            <figure className="review-text">
                <q>
                    {description}
                </q>
                <Stack spacing={4}>
                    <Rating sx={{ mx: "auto", p:2}} name="read-only" readOnly defaultValue={rating} />
                </Stack>
                <figcaption>
                    &mdash; {name}</figcaption>
            </figure>
        </div >
    );
};

export default Review;