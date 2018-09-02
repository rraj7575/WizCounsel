import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Footer from './Footer'
import Register from './Register'
// import Login from './Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Route exact path='/' component={Register} />
          </div>
            <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
