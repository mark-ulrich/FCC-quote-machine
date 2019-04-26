import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShareLinks from './ShareLinks';
import GenerateQuote from './GenerateQuote';

export class QuoteBox extends Component {
  render() {
    // const { title } = this.props;
    const quote = this.props.quote;
    const { text, author } = quote;
    return (
      <div id='quote-box'>
        {/* <h1 id='title'>{title}</h1> */}
        <div className='quote'>
          <p id='text'>
            <span className='begin-quotation-mark quotation-mark'>
              <i className='fa fa-quote-left' />
            </span>
            {text}
            <span className='quotation-mark end-quotation-mark'>
              <i className='fa fa-quote-right' />
            </span>
          </p>
          <p id='author'>-&nbsp;{author}</p>
        </div>
        <div className='bottom-container'>
          <ShareLinks quote={quote} />
          <GenerateQuote generateMethod={this.props.generateMethod} />
        </div>
      </div>
    );
  }
}

QuoteBox.propTypes = {
  title: PropTypes.string.isRequired,
  quote: PropTypes.object.isRequired,
  generateMethod: PropTypes.func.isRequired
};

export default QuoteBox;
