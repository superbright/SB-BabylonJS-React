function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { Engine, Scene, EngineOptions } from '@babylonjs/core';
import * as React from 'react';
const styles = {
  root: {
    display: "block"
  },
  threedcanvas: {
    width: "80%",
    height: "100%",
    padding: "0px",
    margin: "0px" // -ms-touch-action: none,
    // touch-action: none,
    // cursor: move,
    // outline: none !important

  }
};
export default class BabylonTemplate extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "scene", void 0);

    _defineProperty(this, "engine", void 0);

    _defineProperty(this, "canvas", void 0);

    _defineProperty(this, "onResizeWindow", () => {
      if (this.engine) {
        this.engine.resize();
      }
    });

    _defineProperty(this, "onCanvasLoaded", c => {
      if (c !== null) {
        this.canvas = c;
      }
    });
  }

  componentDidMount() {
    this.engine = new Engine(this.canvas, true, this.props.engineOptions, this.props.adaptToDeviceRatio);
    let scene = new Scene(this.engine);
    this.scene = scene;

    if (typeof this.props.onSceneMount === 'function') {
      this.props.onSceneMount({
        scene,
        engine: this.engine,
        canvas: this.canvas
      });
    } else {
      console.error('onSceneMount function not available');
    } // Resize the babylon engine when the window is resized


    window.addEventListener('resize', this.onResizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeWindow);
  }

  render() {
    // 'rest' can contain additional properties that you can flow through to canvas:
    // (id, className, etc.)
    let {
      width,
      height
    } = this.props;
    let opts = {};
    return React.createElement("canvas", _extends({
      id: "threed-canvas",
      style: styles.threedcanvas
    }, opts, {
      ref: this.onCanvasLoaded
    }));
  }

}