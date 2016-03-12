/** @flow */

require('./styles.css');

import React, { Component, PropTypes } from 'react';

class Cursor extends Component {

  render(): ?ReactElement {
    return (
      <div className="Cursor">
        Cursor
      </div>
    );
  }

  static displayName = 'Cursor';

  static propTypes = {
    // id: PropTypes.any.isRequired,
  };

}

export default Cursor;
