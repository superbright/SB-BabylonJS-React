import React from 'react';
import './App.css';


import BabylonTemplate from "./babylon/BabylonTemplate"
import { onSceneMounting } from "./babylon/BabylonScene"


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
