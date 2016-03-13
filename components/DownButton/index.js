/** @flow */

require('./styles.css');

import React, { Component, PropTypes } from 'react';
import { Entity, Animation } from 'aframe-react';

class DownButton extends Component {

  state = {
    hovering: false
  };

  toggleHover = () => {
    console.log('toggle hover');
    this.setState({ hovering: !this.state.hovering });
  };

  render(): ?ReactElement {
    return (
      <Entity
        geometry="primitive: plane; depth: 0.005; height: 21.2; width: 21.2"
        position="0 -2 -4"
        material="src: 'url(/public/imgs/arrow_down.png)'; transparent: true"
        scale="0.025 0.025 1"
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        { this.state.hovering && (
          <Animation
            attribute="rotation"
            dur="1000"
            repeat="3"
            to="0 360 0"
          />
        )}
      </Entity>
    );
  }

  static displayName = 'DownButton';

  static propTypes = {
    // id: PropTypes.any.isRequired,
  };

}

export default DownButton;
