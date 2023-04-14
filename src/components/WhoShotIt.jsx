import React from "react";
import PlayerNumber from "./PlayerNumber";

const WhoShotIt = ({ info, setInfo }) => {
  function handleSelect(e) {
    console.log("handle" + e.target.value);
    setInfo({ team: e.target.value });
  }

  return (
    <>
      <h3>Who Shot it?</h3>
      <select value={info ? info.team : ""} onChange={(e) => handleSelect(e)}>
        <option value="A">Team A</option>
        <option value="B">Team B</option>
      </select>
      <PlayerNumber info={info} setInfo={setInfo} />
    </>
  );
};

export default WhoShotIt;
