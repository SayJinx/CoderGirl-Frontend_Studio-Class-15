import { NavLink, Route } from 'react-router-dom'
import Blog from './Blog'
import Contact from './Contact'
import Welcome from './Welcome'
import Message from './Message'
// TO DO: Add the Proper Routes to the components Listed Below!


import './App.css';


function App() {
  return (
      <div className="App">

      <header>

        <Route className='App' exact path='/home'>
          <Welcome />
        </Route>
        <Route exact path='/about'>
          <Message />
        </Route>
        <Route exact path='/blog'>
          <Blog />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>

        <nav>
          <ul>
            <li>
              <NavLink to='/home'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/blog'>Blog</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </nav>

      </header>
      </div>
  );
}

export default App;
