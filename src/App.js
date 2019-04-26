import React, { Component } from 'react';
import QuoteBox from './components/QuoteBox';
import Footer from './components/Footer';

import './App.css';

export class App extends Component {
  state = {
    title: 'Quote Machine',
    quotes: [
      {
        text:
          "Without passion, you don't have energy. Without energy, you have nothing.",
        author: 'Donald Trump'
      },
      {
        text:
          'Whenever you find yourself on the side of the majority, it is time to pause and reflect.',
        author: 'Mark Twain'
      },
      {
        text: 'The true sign of intelligence is not knowledge but imagination.',
        author: 'Albert Einstein'
      },
      {
        text: 'Political correctness is tyranny with manners',
        author: 'Charlton Heston'
      },
      {
        text:
          'What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do.',
        author: 'John Ruskin'
      },
      {
        text: 'Happiness is not an ideal of reason but of imagination.',
        author: 'Immanuel Kant'
      },
      {
        text:
          'It is one thing to show a man that he is in error, and another to put him in possession of truth',
        author: 'John Locke'
      },
      {
        text:
          "Whether you think you can or whether you think you can't, you're right.",
        author: 'Henry Ford'
      },
      {
        text:
          "A bird doesn't sing because it has an answer, it sings because it has a song.",
        author: 'Maya Angelou'
      }
    ],
    index: 0
  };

  componentDidMount() {
    this.generateQuote();
  }

  generateQuote = () => {
    // Generate a random index
    let index = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      index: index
    });
  };

  render() {
    const quote = this.state.quotes[this.state.index];
    return (
      <div id='app-container'>
        <QuoteBox
          title={this.state.title}
          quote={quote}
          generateMethod={this.generateQuote}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
