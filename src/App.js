import React from 'react';
import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Predict from './pages/Predict'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/auth/register" component={ Register } />
        <Route path="/auth/login" component={ Login } />
        <Route path="/predict" component={ Predict } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
