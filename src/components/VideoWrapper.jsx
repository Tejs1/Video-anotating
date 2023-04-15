import React, { useRef } from "react";

export default function VideoWrapper({ videoRef, data }) {
  console.log(Object.keys(data));
  // function checkData() {}
  return (
    <section className="video-wrapper">
      <video ref={videoRef} controls src="/TIMER.mp4"></video>
      {/* { data.[0] ? && (
      <>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Time</th>
            <th>Type</th>
            <th>Position</th>
            <th>Team</th>
            <th>Player No</th>
            <th>Shot Type</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((entry, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{data.entry.timestamp.min}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </>)} */}
    </section>
  );
}
