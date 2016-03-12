/** @flow */
'use strict';

require('./styles.css');

import React, {Component} from 'react';

class Base extends Component {
  render(): ?ReactElement {
    return (
      <div className="Base">
        Welcome Base
        {this.props.children}
      </div>
    );
  }
}

export default Base;
