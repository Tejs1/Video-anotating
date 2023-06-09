import React, { useEffect, useState } from "react";

const DataView = () => {
  const [state, setState] = useState();
  const storage = JSON.parse(localStorage.getItem("data"));
  let entries = [];
  Object.keys(storage).forEach((key) => {
    if (key !== "count") {
      entries[key] = storage[key];
    }
  });
  console.log(entries);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>number</td>
            <td>value</td>
            <td>time</td>
            <td>location</td>
            <td>team</td>
            <td>Player No</td>
            <td>Shot type</td>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{entry.value}</td>
              <td>
                {entry.timestamp.min + "m " + entry.timestamp.min + "sec"}
              </td>
              <td>
                <tr>
                  <td>{"x : " + entry.cordinates.x.toFixed(2)}</td>
                  <td>{"y : " + entry.cordinates.y.toFixed(2)}</td>
                </tr>
              </td>
              <td>{entry.WhoShotIt.team}</td>
              <td>{entry.WhoShotIt.playerNumber}</td>
              <td>{entry.shottype}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataView;
