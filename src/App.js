import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Blog from './Blog'
// TO DO: Add the Proper Routes to the components Listed Below!


import './App.css';


function App() {
  return (
      <div className="App">
      <Switch>
        <Route exact path='/blog'>
          <Blog />
        </Route>
      </Switch>

      </div>
  );
}

export default App;
