import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VideoWrapper from "./components/VideoWrapper";
import LabelWrapper from "./components/LabelWrapper";

function App() {
  const [data, setData] = useState({ count: 0 });

  const videoRef = useRef();
  console.log(data);
  return (
    <div className="App">
      <VideoWrapper videoRef={videoRef} data={data} />
      <LabelWrapper videoRef={videoRef} data={data} setData={setData} />
    </div>
  );
}

export default App;
