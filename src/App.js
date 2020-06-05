import React from 'react';
import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
