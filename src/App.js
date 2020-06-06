import React from 'react';
import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/auth/register" component={ Register } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
