import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    quote : '',
    category : 'humor',
    quotes : [],
    likedQuotes : []
  }
  componentDidMount() {
    this.getQuote();
  }
  getQuote(){
    if(this.state.category === 'humor'){
      fetch('https://api.chucknorris.io/jokes/random')
      .then( res => res.json())
      .then( res => {
        const newQuotes = this.state.quotes;
        newQuotes.push(res.value);
        this.setState({quote : res.value, quotes : newQuotes})
      })
    }
  }
  handleClick() {
    this.getQuote()
  }
  likedQuote() {
    const likedquote = this.state.likedQuotes;
    likedquote.push(this.state.quote);
    this.setState({likedQuotes : likedquote})
  }
  render() {
    console.log(this.state.quotes)
    console.log(this.state.likedQuotes)
    return (
      <div className="App">
      <select>
        <option> chucknorris</option>
        <option> chucknorris</option>
        <option> chucknorris</option>
        <option> chucknorris</option>
        <option> chucknorris</option>
        </select>
        <h1>
          {this.state.quote}
        </h1>
        <input type='button' value='refresh' onClick={() => this.getQuote()}/>
        <input type='button' value='like' onClick={() => this.likedQuote()}/>
      </div>
    );
  }
}

export default App;
