import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  getQuote() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then( res => res.json())
      .then( res => console.log(res))
  }

  render() {

    return (
      <div className="App">
        {this.getQuote()}
      </div>
    );
  }
}

export default App;
