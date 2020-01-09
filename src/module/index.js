import React from 'react';
import './App.css';


import BabylonTemplate from "../lib/babylon/BabylonTemplate"
import { onSceneMounting } from "../lib/babylon/BabylonScene"


function App() {
  return (
    <div className="App">

      <BabylonTemplate onSceneMount={(e) => { 

            onSceneMounting(e); 

      }}></BabylonTemplate>
    </div>
  );
}

export default App;
