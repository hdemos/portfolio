import React from 'react';

import './App.css';
import Welcome from './Welcome';
import history from "./history";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";


class App extends React.Component{
    render() {


        return (
            <Router history={history}>
                <Route exact path="/" component={Welcome}/>
                <Route path="/Home" exact component={Home}/>
                <Route path="/About" component={About}/>
                <Route path="/Contact" component={Contact}/>
            </Router>


        // <div className="App">
        //     {/*<Welcome/>*/}
        //
        // </div>
    );
    }
}

export default App;
