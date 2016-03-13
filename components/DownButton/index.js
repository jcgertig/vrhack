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
        geometry="primitive: box; depth: 0.005; height: 42.4; width: 42.4"
        position="0 -2 -10"
        rotation="0 0 90"
        material="src: 'url(/public/imgs/arrow.png)'; transparent: true"
        scale="0.03 0.03 1"
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        onClick={()=>{console.log('clicked');}}
      >
        { this.state.hovering && (
          <Animation
            attribute="rotation"
            dur="1000"
            repeat="once"
            to="0 360 360"
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
