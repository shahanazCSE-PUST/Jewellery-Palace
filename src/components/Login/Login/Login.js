import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/user.svg';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import './Login.css';


const style = {
    bgcolor: 'white',
    border: 0,
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    mx: 'auto',
    textAlign: 'center'
}

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{ my: 12 }} className="login-container">
                <Grid container spacing={4}>
                    <Grid item sx={{ mt: 8 }, style} xs={12} md={6}>
                        <Typography style={{ color: '#6159E6' }} variant="body1" gutterBottom>Please Login</Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField onChange={handleOnChange} name="email" sx={{ width: '75%', m: 1 }} id="standard-basic" label="Email" variant="standard" />
                            <TextField onChange={handleOnChange} name="password" sx={{ width: '75%', m: 1 }} id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard" />
                            <Button style={{ backgroundColor: '#6159E6' }} sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;