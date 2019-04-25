import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class GenerateQuote extends Component {
  render() {
    return (
      <div className='generate'>
        <button
          className='btn'
          id='new-quote'
          onClick={this.props.generateMethod}
        >
          Next Quote
        </button>
      </div>
    );
  }
}

GenerateQuote.propTypes = {
  generateMethod: PropTypes.func.isRequired
};

export default GenerateQuote;
