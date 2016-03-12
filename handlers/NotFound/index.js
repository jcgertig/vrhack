/** @flow */
'use strict';

require('./styles.css');

import React, {Component} from 'react';

class NotFound extends Component {
  render(): ?ReactElement {
    return (
      <div className="NotFound">
        Welcome NotFound
        {this.props.children}
      </div>
    );
  }
}

export default NotFound;
