import React, { useState, useRef, useCallback } from "react";

const PlayerNumber = ({ info, setInfo }) => {
  const [selected, setSelected] = useState();
  function clickHandler(num) {
    setInfo({ ...info, playerNo: num });
    setSelected(num);
  }
  function getStyles(num) {
    if (selected === num) {
      return { outline: "4px auto -webkit-focus-ring-color" };
    }
  }
  return (
    <div className="playerNumberDiv">
      <div>
        {[11, 22, 32, 25, 5].map((num) => (
          <button
            onClick={(e) => clickHandler(num)}
            key={num}
            style={getStyles(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlayerNumber;
