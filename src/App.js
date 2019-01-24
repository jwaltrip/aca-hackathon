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

  listLikedQuotes = () => {
    if (this.state.likedQuotes.length !== 0) {
      return (
        <ul>
          {this.state.likedQuotes.map((quote, idx) => {
            const bgColor = (idx % 2 === 0) ? '#dddddd' : 'white';

            return <li key={idx} style={{ backgroundColor: bgColor }}>{quote}</li>
          })}
        </ul>
      );
    }
  };

  render() {
    console.log(this.state.quotes)
    console.log(this.state.likedQuotes)
    return (
      <div className="App">
        <div className="container">
          <h1 onClick={() => this.getQuote()}>
            {this.state.quote}
          </h1>
          <input className="new-quote-btn" type='button' value='Generate New Quote' onClick={() => this.getQuote()}/>
          <input className="like-quote-btn" type='button' value='Like Quote' onClick={() => this.likedQuote()}/>
          <br/>
          <h3>Liked Quotes</h3>
          {this.listLikedQuotes()}
        </div>
      </div>
    );
  }
}

export default App;
