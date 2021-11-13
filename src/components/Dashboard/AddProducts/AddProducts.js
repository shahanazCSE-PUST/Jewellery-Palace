import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProducts.css'

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://mysterious-wildwood-35872.herokuapp.com/products', data)
        .then(res =>{
            console.log(res);
            if(res.data.insertedId){
                alert('Successfully added')
                reset();       
            }
          })
    }
    return (
        <div className="add-product">
            <h2 className="tittle-text my-3 span-color">Please add a new Product</h2>
            <form className="custom-width" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true})} placeholder="Product name" />
                <input {...register("price")} placeholder="Price" />
                <input {...register("description", { required: true})} placeholder="Description" />
                <input {...register("img", { required: true})} placeholder="Image Url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;