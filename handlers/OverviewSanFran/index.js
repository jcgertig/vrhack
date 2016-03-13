/** @flow */

require('./styles.css');

import React, { Component, PropTypes } from 'react';

import {Animation, Entity, Scene} from 'aframe-react';

import Camera from 'Camera';
import Cursor from 'Cursor';
import VideoSky from 'VideoSky';
import DownButton from 'DownButton';

class OverviewSanFran extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  state = {
    cover: ''
  };

  timer = null;

  navigateTo = (to) => {
    this.context.router.push(to);
  };

  startNavigation = (to) => {
    this.timer = setTimeout(()=>this.navigateTo(to), 1000);
  };

  stopNavigation = () => {
    clearTimeout(this.timer);
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
    this.setState({ cover });
  };

  closeCover = () => {
    this.setState({ cover: '' });
  };

  render(): ?ReactElement {
    return (
      <Entity>
        <a-cylinder
          src="/public/imgs/Bridge.jpg"
          height="35"
          rotation="0 240 0"
          scale="1 1 -1"
          radius="20"
          segments-radial="1000"
        ></a-cylinder>
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
          material="src: 'url(/public/imgs/whatisvr.png)'"
          scale="0.0105 0.0105 1"
          look-at="[camera]"
          onMouseEnter={()=>this.openCover('what_expanded.png')}
        />
        <Entity
          geometry="primitive: box; depth: 0.01; height: 51.2; width: 51.2"
          position="-1.5 -0.45 -4"
          material="src: 'url(/public/imgs/whenisvr.png)'"
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
          material="src: 'url(/public/imgs/location.png)'"
          scale="0.07 0.05 1"
          onMouseEnter={()=>this.startNavigation('/san_fancisco')}
          onMouseLeave={()=>this.stopNavigation('/san_fancisco')}
        />
      </Entity>
    );
  }

  static displayName = 'OverviewSanFran';

  static propTypes = {
    // id: PropTypes.any.isRequired,
  };

}

export default OverviewSanFran;
