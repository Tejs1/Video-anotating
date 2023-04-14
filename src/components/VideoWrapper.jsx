import React, { useRef } from "react";

export default function VideoWrapper({ videoRef }) {
  return (
    <section className="video-wrapper">
      <video ref={videoRef} controls src="/TIMER.mp4"></video>
    </section>
  );
}
