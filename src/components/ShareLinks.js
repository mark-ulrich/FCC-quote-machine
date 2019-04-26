import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ShareLinks extends Component {
  render() {
    const { text, author } = this.props.quote;
    const tweetUrl = `https://twitter.com/intent/tweet?text="${text}"++-+${author}`;
    // const facebookUrl = `https://facebook.com`;
    return (
      <div className='share-links'>
        <a href={tweetUrl} target='_blank' id='tweet-quote'>
          <i className='fab fa-twitter fa-2x' />
        </a>
        {/* <a href={facebookUrl} id='fb-share-quote'>
          <i className='fab fa-facebook fa-2x' />
        </a> */}
      </div>
    );
  }
}

ShareLinks.propTypes = {
  quote: PropTypes.string.isRequired
};

export default ShareLinks;
