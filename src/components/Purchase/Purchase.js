import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import './Purchase.css';

const style = {
    bgcolor: 'white',
    borderRadius: 4,
    mx: 'auto',
    textAlign: 'center'
}

const Purchase = () => {
    const {user}= useAuth();
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
    const initialInfo = { name: user.displayName, email: user.email, phone: '',address:'', status:'pending'  }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    
  useEffect(() => {
        fetch(`https://mysterious-wildwood-35872.herokuapp.com/products/${productId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProduct(data);
            });
    }, []);
    

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }
    const handleBookingSubmit = e => {
    
        // collect data
        const appointment = {
            ...bookingInfo,
            productName: product.name,
            price:product.price
        }
        // send to the server
        fetch('https://mysterious-wildwood-35872.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
            alert('Successfully Ordered');
            console.log(data);
            e.target.name = '';
         
        });
        e.preventDefault();
    }

    // const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // const { user } = useAuth();

    // const { productId } = useParams();
    // const [product, setProduct] = useState([])

    // useEffect(() => {
    //     fetch(`https://mysterious-wildwood-35872.herokuapp.com/products/${productId}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setProduct(data);
    //         });
    // }, []);

    // const onSubmit = data => {
    //     fetch('https://haunted-cemetery-18562.herokuapp.com/myOrders', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(res => res.json())
    //     .then(result =>{
    //         console.log(result)
    //         if(result.insertedId){
    //             alert('Booking Successful!')
    //             reset();
    //         }

    //     })
    // };
    return (
        <div>
            <Navigation/>
            <div className="container">
                <div className="pt-2">
                    <img className="detail-img img-fluid" src={product.img} alt="" />
                    <div className="">
                        <h4 className="pt-2">{product.name}</h4>
                        <p className="">{product.description}</p>
                        <p><span className="fw-bold">Price: </span> {product.price}</p>
                    </div>

                </div>
                <div className="">
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="p" sx={{ mb: 2 }} style={{ color: '#FF6F33'}}>
                       Submit the following information to confirm order
                    </Typography>
                    <form onSubmit={handleBookingSubmit} className="my-form">
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="outlined-size-small"
                            name="userName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            label="Name"
                            size="small"
                            variant="outlined"
                        />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            label="Email"
                            size="small"
                            variant="outlined"
                        />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            required
                            id="outlined-size-small"
                            name="address"
                            onBlur={handleOnBlur}
                            label="Address"
                            size="small"
                            variant="outlined"
                        />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            required
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            label="Phone Number"
                            size="small"
                            variant="outlined"
                        />
                        <Button type="submit" variant="contained" sx={{ m: 2 ,px:5, display: 'block',mx:'auto'}} style={{ backgroundColor: '#FF6F33' }}>Submit</Button>
                    </form>
                </Box>
                    {/* <h2 className="span-color">Submit the following information to confirm order</h2>
                    <form className="shipping-form">
                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                        <input placeholder="Phone" defaultValue="" {...register("phone", { required: true })} />
                        <input defaultValue='Pending' {...register("status")} />
                        <input type="submit" />
                    </form> */}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;