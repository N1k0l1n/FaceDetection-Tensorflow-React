import "./App.css";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import WebCam from "react-webcam";
import { useRef, useEffect } from "react";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const runFaceMesh = async () => {
      const net = await facemesh.load({
        inputResolution: { width: 640, height: 480 },
        scale: 0.8,
      });
      setInterval(() => {
        detect(net);
      }, 100);
    };

    const detect = async (net) => {
      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ) {
        // Get video props
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;
        // Set video width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;
        // Set canvas width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
        // Make detection
        const face = await net.estimateFaces(video);
        console.log(face);
      }
    };

    // Run model
    runFaceMesh();
  }, []);

  return (
    <div className="webcam">
      <WebCam
        ref={webcamRef}
        style={{
          width: "auto",
          height: "100%",
        }}
      />
      <canvas ref={canvasRef} />
    </div>
  );
}

export default App;
