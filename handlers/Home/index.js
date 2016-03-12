/** @flow */

require('./styles.css');

import React, { Component, PropTypes } from 'react';

class Home extends Component {

  state = {
    msg: 'Hello World'
  };

  render(): ?ReactElement {
    return (
      <div className="Home">
        {this.state.msg} Home
      </div>
    );
  }

  static displayName = 'Home';

  static propTypes = {
    // id: PropTypes.any.isRequired,
  };

}

export default Home;
