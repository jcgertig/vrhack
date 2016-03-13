/** @flow */

require('./styles.css');

import React, { Component, PropTypes } from 'react';

import {Animation, Entity, Scene} from 'aframe-react';

import Camera from 'Camera';
import Cursor from 'Cursor';
import VideoSky from 'VideoSky';
import DownButton from 'DownButton';

class Overview extends Component {

  state = {
    cover: ''
  };

  renderCover = () => {
    if (this.state.cover.length > 0) {
      let geometry = { primitive: 'box', depth: 0.01 };
      let material = { src: 'url(/public/imgs/'+this.state.cover+')'};
      let scale = '0.025 0.025 1';
      let position = '0 0 -1.5';
      switch (this.state.cover) {
        case 'what_expanded.png':
          geometry = Object.assign({}, geometry, {
            width: 51.2,
            height: 18.2,
          });
          break;
        case 'who_is_hosting.png':
          geometry = Object.assign({}, geometry, {
            width: 51.2,
            height: 18.2,
          });
          break;
        case 'when_is_vr_open.png':
          geometry = Object.assign({}, geometry, {
            width: 51.2,
            height: 8.3,
          });
          position = '0 -0.18 -1.5'
          break;

      }
      return (
        <Entity>
          <Entity
            geometry={{primitive: 'box', depth: 4, width: 4, height: 4}}
            material={{color: '#562C76', shader: 'flat', opacity: 0.7}}
            scale="1 1 -1"
          />
          <Entity
            geometry={geometry}
            material={material}
            scale={scale}
            position={position}
            onMouseLeave={this.closeCover}
          />
        </Entity>
      );
    }

  };

  openCover = (cover) => {
    console.log('over');
    this.setState({ cover });
  };

  closeCover = () => {
    this.setState({ cover: '' });
  };

  render(): ?ReactElement {
    return (
      <Entity>
        { this.renderCover() }
        <Entity
          geometry="primitive: box; depth: 0.01; height: 51.2; width: 65.4"
          position="-3 -0.05 -4"
          material="src: 'url(/public/imgs/Overview.png)'"
          scale="0.035 0.05 1"
        />
        <Entity
          geometry="primitive: box; depth: 0.01; height: 51.2; width: 51.2"
          position="-1.5 0.11 -4"
          material="src: 'url(/public/imgs/What_Is_VR.png)'"
          scale="0.0105 0.0105 1"
          look-at="[camera]"
          onMouseEnter={()=>this.openCover('what_expanded.png')}
        />
        <Entity
          geometry="primitive: box; depth: 0.01; height: 51.2; width: 51.2"
          position="-1.5 -0.45 -4"
          material="src: 'url(/public/imgs/When_Is_VR.png)'"
          scale="0.0105 0.0105 1"
          look-at="[camera]"
          onMouseEnter={()=>this.openCover('when_is_vr_open.png')}
        />
        <Entity
          geometry="primitive: box; depth: 0.01; height: 51.2; width: 51.2"
          position="-1.5 -1.01 -4"
          material="src: 'url(/public/imgs/Profile.png)'"
          scale="0.0105 0.0105 1"
          look-at="[camera]"
          onMouseEnter={()=>this.openCover('who_is_hosting.png')}
        />
        <Entity
          geometry="primitive: box; depth: 0.01; height: 49.2; width: 40.2"
          position="3 -0.05 -4"
          material="src: 'url(/public/imgs/Register_Block.png)'"
          scale="0.07 0.05 1"
        />
      </Entity>
    );
  }

  static displayName = 'Overview';

  static propTypes = {
    // id: PropTypes.any.isRequired,
  };

}

export default Overview;
