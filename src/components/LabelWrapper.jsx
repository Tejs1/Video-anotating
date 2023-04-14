import { useState, useRef, useEffect } from "react";
import CourtCanvas from "./CourtCanvas";
import WhoShotIt from "./WhoShotIt";

export default function LabelWrapper({ videoRef }) {
  const [point, setPoint] = useState(0);
  const [timeStamp, setTimeStamp] = useState({ min: 0, sec: 0 });
  const [isCanvasClicked, setIsCanvasClicked] = useState(false);
  const [location, setLocation] = useState(null);
  const [info, setInfo] = useState(null);

  const labelhandler = () => {
    console.log(videoRef.current.currentTime);
    const minutes = parseInt(videoRef.current.currentTime / 60, 10);
    const seconds = Math.trunc(videoRef.current.currentTime % 60);
    setTimeStamp({ min: minutes, sec: seconds });
  };
  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <section className="label-wrapper">
      <h2>
        TimeStamp Min: {timeStamp.min} sec: {timeStamp.sec}
      </h2>
      <button onClick={labelhandler}>2 Pointer</button>
      <CourtCanvas
        isCanvasClicked={isCanvasClicked}
        setIsCanvasClicked={setIsCanvasClicked}
        location={location}
        setLocation={setLocation}
      />
      {!location ? null : <WhoShotIt info={info} setInfo={setInfo} />}
    </section>
  );
}
