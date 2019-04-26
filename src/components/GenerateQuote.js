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
          Next Quote&nbsp;&nbsp;
          <i className='fas fa-arrow-circle-right' />
        </button>
      </div>
    );
  }
}

GenerateQuote.propTypes = {
  generateMethod: PropTypes.func.isRequired
};

export default GenerateQuote;
