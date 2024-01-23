import './App.css';
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import WebCam from "react-webcam";
import { useRef } from 'react';

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  //Load facemesh model
  const runFaceMesh = async() =>{
    const net = await facemesh.load({
    inputResolution: {width: 640, height:480}, scale: 0.8
    })
    }

    
  return (
    <div className="webcam">
      <WebCam
        ref={webcamRef}
        style={{
          width: 'auto',
          height: '100%',
        }}
      />
      <canvas
        ref={canvasRef}
      />
    </div>
  );
}

export default App;
