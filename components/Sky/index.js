/** @flow */

require('./styles.css');

import React, { Component, PropTypes } from 'react';
import {Entity} from 'aframe-react';

class Sky extends Component {

  render(): ?ReactElement {
    return (
      <Entity
        geometry={{primitive: 'sphere', radius: 5000}}
        material={{color: '#562C76', shader: 'flat'}}
        scale="1 1 -1"
      />
    );
  }

  static displayName = 'Sky';

  static propTypes = {};

}

export default Sky;
