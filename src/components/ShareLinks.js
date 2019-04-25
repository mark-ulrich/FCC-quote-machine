import React, { Component } from 'react';

export class ShareLinks extends Component {
  render() {
    return (
      <div className='share-links'>
        <a href='https://twitter.com/intent/tweet' id='tweet-quote'>
          <i className='fab fa-twitter fa-2x' />
        </a>
      </div>
    );
  }
}

export default ShareLinks;
