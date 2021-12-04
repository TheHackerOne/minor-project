import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Signup from './Components/Auth/Signup.js';
import Profile from './Components/Profile';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Auth/Login'
import PrivateRoute from './Components/PrivateRoute'
import AuthProvider, { AuthContext } from './Components/Auth/AuthContext';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Switch>
        <Route path='/dashboard' component={Dashboard} exact/>
        <Route path='/signup' component={Signup} exact/>
        <Route path='/login' component={Login} exact/>
        <PrivateRoute path='/profile' component={Profile}/>
      </Switch>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
