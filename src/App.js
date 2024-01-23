import './App.css';
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import WebCam from "react-webcam";
import { useRef } from 'react';

function App() {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);


  return (
    <div class="webcam">
       <WebCam
        ref={webcamRef}
        style={{
          width: 'auto',
          height: '100%',
        }}
      />
	</div>
  );
}

export default App;
