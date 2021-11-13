import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Explore from './components/Explore/Explore';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Purchase from './components/Purchase/Purchase';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
     <Switch>
     <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/purchase/:productId">
            <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="*">
            <NotFound></NotFound>
          </Route>
     </Switch>
     </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
