import React from "react";

const ShotResult = ({ value, setIspaused }) => {
  function pointType() {
    return parseInt(value);
  }
  const shotResults = [
    "MAKE",
    "MISS",
    pointType() + "+1",
    pointType() + "MISS +F",
  ];
  return (
    <div>
      {shotResults.map((res) => (
        <button key={res} onClick={() => setIspaused(true)}>
          {res}
        </button>
      ))}
    </div>
  );
};

export default ShotResult;
