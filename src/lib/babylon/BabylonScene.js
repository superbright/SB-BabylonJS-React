import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Vector3} from "@babylonjs/core/Maths/math";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { MeshBuilder } from"@babylonjs/core/Meshes/meshBuilder";


 // BABYLON JS INIT FUNCCTION
 export const onSceneMounting = (e) => {

    const {canvas, scene} = e;

    var camera = new ArcRotateCamera("Camera", Math.PI/2, Math.PI/3, 1.5, new Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, false);
    camera.wheelPrecision = 50;
    camera.minZ = 0.001;
    camera.panningdistancelimit = 2.0;
    camera.lowerBetaLimit = 0;
    camera.upperBetaLimit = 2;
    camera.upperRadiusLimit = 5;
    camera.lowerRadiusLimit = 0.2;

    MeshBuilder.CreateGround("ground", {height: 1, width: 1, subdivisions: 4}, scene);


    // Add lights to the scene
    new HemisphericLight("light1", new Vector3(0.2, 0.2, 0), scene);

  scene.getEngine().runRenderLoop(() => {
      if (scene) {
          //document.querySelector('#fpsLabel').textContent = 'FPS: ' + scene.getEngine().getFps().toFixed();
          scene.render();
      }
  });

  return { scene : scene  };
};
