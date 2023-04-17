import React, { useState } from "react";

const ShotType = ({ info, setInfo }) => {
  const [selected, setSelected] = useState();

  const options = [
    `DRIVE`,
    `LAY UP`,
    `CATCH N SHOOT`,
    `DUNK`,
    `Pick 'n' Roll`,
    `Hook Shoot`,
  ];
  function clickHandler(option) {
    setInfo({ ...info, shottype: option });
    setSelected(option);
  }
  function getStyles(option) {
    if (selected === option) {
      console.log("sty");
      return { outline: "4px auto -webkit-focus-ring-color" };
    }
  }
  return (
    <div>
      <h3>ShotType</h3>
      <div>
        {options.map((option) => (
          <button
            onClick={() => clickHandler(option)}
            key={option}
            style={getStyles(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShotType;
