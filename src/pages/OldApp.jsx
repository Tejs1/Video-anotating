import { useState, useRef, useEffect } from "react";
import "./old.css";
import VideoWrapper from "../components/VideoWrapper";
import LabelWrapper from "../components/LabelWrapper";

function OldApp() {
  const [data, setData] = useState({ count: 0 });
  useEffect(() => {
    if (localStorage.getItem("data"))
      setData(JSON.parse(localStorage.getItem("data")));
  }, []);

  const videoRef = useRef();
  console.log(data);
  return (
    <div className="old">
      <VideoWrapper videoRef={videoRef} data={data} />
      <LabelWrapper videoRef={videoRef} data={data} setData={setData} />
    </div>
  );
}

export default OldApp;
