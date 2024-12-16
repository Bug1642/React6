import React from 'react'
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import Topics from './screens/Topics';
import About from './screens/About';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';

const App =() =>
(
    <Router>
        <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Topics">Topics</Link></li>
        </ul>
        <hr/>
        <Route exact path="/"component={Home}/>
        <Route path="/About"component={About}/>
        <Route path="/Topics"component={Topics}/>
        </div>
    </Router>
)
ReactDOM.render(<App />,document.getElementById("root"));