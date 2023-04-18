import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function VideoWrapper({ videoRef, data }) {
  console.log(Object.keys(data));
  // function checkData() {}
  return (
    <section className="video-wrapper">
      <video ref={videoRef} controls src="/TIMER.mp4"></video>
      <Link to="data">Go to data</Link>
    </section>
  );
}
