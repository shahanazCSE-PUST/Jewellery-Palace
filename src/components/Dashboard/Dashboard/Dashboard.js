import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Switch, Link, Route, useRouteMatch } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import Payment from '../Payment/Payment';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MyOrders from '../MyOrders/MyOrders';
import ManageOrders from '../ManageOrders/ManageOrders';
import DashboardHome from '../DashboardHome/dashboardHome';
import AddProducts from '../AddProducts/AddProducts';
import ManageProducts from '../ManageProducts/ManageProducts';
import logo from '../../../images/logo4.jpg';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    let { path, url } = useRouteMatch();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { logout, admin, user, email, name } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            {
                admin && <Box>
                    <Button sx={{ mt: 4 }}>
                        {user.displayName}
                    </Button>
                    <Typography variant="p" noWrap component="div">
                        {user.email}
                    </Typography>
                </Box>
            }
            <Toolbar />
            <Divider />
            {
                !admin && <Box>
                    <Box><Link className="text-decoration-none" to={`${url}/pay`}><Button color="inherit">Pay</Button></Link></Box>
                    <Box><Link className="text-decoration-none" to={`${path}/myOrders`}><Button color="inherit">My Orders</Button></Link></Box>
                    <Box><Link className="text-decoration-none" to={`${url}/addreview`}><Button color="inherit">Review</Button></Link></Box>
                </Box>
            }
            {admin && <Box>
                <Link to={`${url}/manageOrders`} className="text-decoration-none"><Button color="inherit">Manage All Orders</Button></Link>
                <Link to={`${url}/addProduct`} className="text-decoration-none"><Button color="inherit">Add A Product</Button></Link>
                <Link to={`${url}/makeAdmin`} className="text-decoration-none"><Button color="inherit">Make Admin</Button></Link>
                <Link to={`${url}/manageProduct`} className="text-decoration-none"><Button color="inherit">Manage Products</Button></Link>
            </Box>}
            <Box><Button onClick={logout} color="primary" variant="outlined">LogOut</Button></Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
                style={{ backgroundColor: '#212529' }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" noWrap component="div">
                        <Link className="text-decoration-none" to='/home'><img
                            src={logo}
                            width="60"
                            height="50"
                            className="d-inline-block align-top rounded-circle"
                            alt="Jewelry Palace logo"
                        /><Button style={{ color: '#fff' }}  className="fs-5">Jewellery Palace</Button></Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <PrivateRoute path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/pay`}>
                        <Payment></Payment>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/addreview`}>
                        <AddReview></AddReview>
                    </PrivateRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProducts></AddProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProduct`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;