import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VideoWrapper from "./components/VideoWrapper";
import LabelWrapper from "./components/LabelWrapper";

function App() {
  const [count, setCount] = useState(0);
  const videoRef = useRef();

  return (
    <div className="App">
      <VideoWrapper videoRef={videoRef} />
      <LabelWrapper videoRef={videoRef} />
    </div>
  );
}

export default App;
