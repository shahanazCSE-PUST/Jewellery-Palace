import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        fetch('https://mysterious-wildwood-35872.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
            if(result.insertedId){
                alert('Successfully Added!')
                reset();
            }
          
        })
    };
    return (
        <div className="add-review">
            <h2 className="tittle-text span-color">Add Review</h2>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <textarea placeholder="Description" {...register("description", { required: true})} />
                    <input placeholder="Add Rating" type="number" {...register("rating", { min: 1, max: 5,required: true})} />
                    <input type="submit" />
                </form>
        </div>
    );
};

export default AddReview;