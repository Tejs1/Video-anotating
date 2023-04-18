import React, { useRef } from "react";
import "./App.css";
const App = () => {
  const videoRef = useRef();
  return (
    <main className="App">
      <section className="videoTimeline">
        <div className="video-wrapper">video</div>
        <div className="timeline-wrapper">Timeline</div>
      </section>
      <section className="sidebar">
        <div className="video-wrapper">video</div>
        <div className="timeline-wrapper">Timeline</div>
      </section>
    </main>
  );
};

export default App;
