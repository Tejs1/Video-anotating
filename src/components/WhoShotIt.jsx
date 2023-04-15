import React from "react";
import PlayerNumber from "./PlayerNumber";

const WhoShotIt = ({ info, setInfo }) => {
  function handleSelect(e) {
    setInfo({ ...info, team: e.target.value });
  }

  return (
    <div>
      <h3>Who Shot it?</h3>
      <select value={info ? info.team : ""} onChange={(e) => handleSelect(e)}>
        <option value="A">Team A</option>
        <option value="B">Team B</option>
      </select>
      <PlayerNumber info={info} setInfo={setInfo} />
    </div>
  );
};

export default WhoShotIt;
