/** @flow */

require('./styles.css');

import React, { Component, PropTypes } from 'react';
import {Entity} from 'aframe-react';

class Cursor extends Component {

  state = {
    geometry: {
      primitive: 'ring',
      radiusInner: 0.01,
      radiusOuter: 0.016
    },
    material: {
      shader: 'flat',
      transparent: true
    }
  };

  render(): ?ReactElement {
    let {geometry, material} = this.state;
    let {color, opacity} = this.props;
    let materialOther = {color: color || 'black', opacity: opacity || 0.9};
    return (
      <Entity
        cursor={this.props}
        geometry={geometry}
        material={Object.assign({}, material, materialOther)}
        position="0 0 -1"
      />
    );
  }

  static displayName = 'Cursor';

  static propTypes = {
    color: PropTypes.any,
    opacity: PropTypes.number,
  };

}

export default Cursor;
