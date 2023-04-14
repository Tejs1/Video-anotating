import React from "react";

const PlayerNumber = ({ info, setInfo }) => {
  function clickHandler(num) {
    setInfo({ ...info, playerNo: num });
  }

  return (
    <div className="playerNumberDiv">
      <div>
        {[11, 22, 32, 25, 5].map((num) => (
          <button onClick={() => clickHandler(num)} key={num}>
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlayerNumber;
