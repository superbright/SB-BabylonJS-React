import { Engine, Scene, EngineOptions } from '@babylonjs/core';
import * as React from 'react';

import { onSceneMounting } from "./BabylonScene"


/* @flow */
export type SceneEventArgs = {
  engine: Engine,
  scene: Scene,
  canvas: HTMLCanvasElement
};

/* @flow */
export type SceneProps = {
  engineOptions?: EngineOptions,
  adaptToDeviceRatio?: boolean,
  onSceneMount?: (args: SceneEventArgs) => void,
  width?: number,
  height?: number
};

const styles = {
  root: {
    display: "block"
  },
  threedcanvas: {
      width: "80%",
      height: "100%",
      padding: "0px",
      margin: "0px",
      // -ms-touch-action: none,
      // touch-action: none,
      // cursor: move,
      // outline: none !important
  }
 
}

export default class BabylonTemplate<Props, State = void> extends React.Component {

  /* @flow */
   scene: Scene;
   engine: Engine;
   canvas: HTMLCanvasElement;


  onResizeWindow = () => {
     
    if (this.engine) {
      this.engine.resize();
    }
  }

  componentDidMount () {
    this.engine = new Engine(
        this.canvas,
        true,
        this.props.engineOptions,
        this.props.adaptToDeviceRatio
    );

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
    }

    // Resize the babylon engine when the window is resized
    window.addEventListener('resize', this.onResizeWindow);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResizeWindow);
  }

  onCanvasLoaded = (c : HTMLCanvasElement) => {
    if (c !== null) {
      this.canvas = c;
    }
  }

  render () {
    // 'rest' can contain additional properties that you can flow through to canvas:
    // (id, className, etc.)
    let { width, height, ...rest } = this.props;

    let opts: any = {};

    return (
      <canvas id="threed-canvas" style={styles.threedcanvas}
        {...opts}
        ref={this.onCanvasLoaded}
      />
    )
  }


}