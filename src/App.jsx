import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VideoWrapper from "./components/VideoWrapper";
import LabelWrapper from "./components/LabelWrapper";

function App() {
  const [data, setData] = useState({ count: 0 });
  useEffect(() => {
    if (localStorage.getItem("data"))
      setData(JSON.parse(localStorage.getItem("data")));
  }, []);

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
