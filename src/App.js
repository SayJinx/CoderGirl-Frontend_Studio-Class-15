import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Blog from 'blog'
// TO DO: Add the Proper Routes to the components Listed Below!


import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path='/blog'>
          <Blog />
        </Route>
      </Switch>

      </div>
    </Router>
  );
}

export default App;
