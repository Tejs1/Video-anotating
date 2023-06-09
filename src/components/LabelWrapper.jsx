import { useState, useRef, useEffect } from "react";
import CourtCanvas from "./CourtCanvas";
import WhoShotIt from "./WhoShotIt";
import ShotType from "./ShotType";
import ShotResult from "./ShotResult";

export default function LabelWrapper({ videoRef, data, setData }) {
  const [isPaused, setIspaused] = useState(false);
  const [value, setValue] = useState(false);
  const [error, setError] = useState();
  const [timeStamp, setTimeStamp] = useState(null);
  const [isCanvasClicked, setIsCanvasClicked] = useState(false);
  const [location, setLocation] = useState(null);
  const [info, setInfo] = useState({});

  const labelhandler = (value) => {
    const minutes = parseInt(videoRef.current.currentTime / 60, 10);
    const seconds = Math.trunc(videoRef.current.currentTime % 60);
    setTimeStamp({ min: minutes, sec: seconds });
    setValue(value);
  };
  const formHandler = (e) => {
    if (!location) {
      setError("enter point on Maps");
      return;
    }
    if (!info.team) {
      setError("select the team of player");
      return;
    }
    if (!info.playerNo) {
      setError("select the player number");
      return;
    }
    if (!info.shottype) {
      setError("select the shottype");
      return;
    }

    localStorage.setItem(
      "data",
      JSON.stringify({
        ...data,
        [data.count]: {
          value: value,
          timestamp: timeStamp,
          cordinates: location,
          WhoShotIt: { team: info.team, playerNumber: info.playerNo },
          shottype: info.shottype,
        },
        count: data.count + 1,
      })
    );
    setData({
      ...data,
      [data.count]: {
        timestamp: timeStamp,
        cordinates: location,
        WhoShotIt: { team: info.team, playerNumber: info.playerNo },
        shottype: info.shottype,
      },
      count: data.count + 1,
    });
  };

  useEffect(() => {
    setValue(null);
    setIspaused(false);
    setTimeStamp(null);
    setIsCanvasClicked(false);
    setLocation(null);
    setInfo({});
  }, [data]);
  return (
    <section className="label-wrapper">
      <h2>
        {timeStamp ? (
          <>
            'TimeStamp Min:' {timeStamp.min} 'sec:' {timeStamp.sec}{" "}
          </>
        ) : null}
      </h2>
      <button onClick={() => labelhandler("2 Pointer")}>2 Pointer</button>
      <button onClick={() => labelhandler("3 Pointer")}>3 Pointer</button>
      {value && <ShotResult value={value} setIspaused={setIspaused} />}
      {isPaused && (
        <>
          <CourtCanvas
            isCanvasClicked={isCanvasClicked}
            setIsCanvasClicked={setIsCanvasClicked}
            location={location}
            setLocation={setLocation}
          />
          <section className="info">
            <WhoShotIt info={info} setInfo={setInfo} />
            <ShotType info={info} setInfo={setInfo} />
          </section>
          <button type="submit" onClick={formHandler}>
            Submit
          </button>
          <p>{error}</p>
        </>
      )}
    </section>
  );
}
