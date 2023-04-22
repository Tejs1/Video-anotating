import React, { useRef, useState, useEffect } from "react";
import "./App.css";
const App = () => {
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const appRef = useRef();
  const videoRef = useRef();
  const [players, setPlayers] = useState({
    teamA: [2, 3, 4, 12, 8],
    teamB: [3, 13, 11, 8, 3],
  });

  function handlePlaybackRateChange(event) {
    videoRef.current.playbackRate = event.target.value;
    setPlaybackRate(event.target.value);
  }
  function handleFullscreenChange(event) {
    setIsFullscreen(document.fullscreenElement !== null);
  }

  return (
    <main className="App" ref={appRef}>
      <section className="videoTimeline">
        <div className="video-wrapper">
          <video
            ref={videoRef}
            controls
            controlsList="nodownload"
            onFullscreenChange={handleFullscreenChange}
          >
            <source src="/TIMER.mp4" type="video/mp4" />
          </video>
          <div className={`controls${isFullscreen ? " fullscreen" : ""}`}>
            <input
              type="range"
              min="0.5"
              max="10"
              step="0.5"
              value={playbackRate}
              onChange={handlePlaybackRateChange}
            />
            <span>{playbackRate}x</span>
          </div>
        </div>
        <div className="timeline-wrapper">
          <div className="timeline">
            <div className="title">Name</div>
            <div className="bar"></div>
          </div>
          <div className="timeline">
            <div className="title">Number</div>
            <div className="bar"></div>
          </div>
          <div className="timeline">
            <div className="title">Tags</div>
            <div className="bar"></div>
          </div>
          <div className="timeline">
            <div className="title">Timing</div>
            <div className="bar"></div>
          </div>
          <div className="timeline">
            <div className="title">Point</div>
            <div className="bar"></div>
          </div>
        </div>
      </section>
      <section className="sidebar">
        <div className="controls-wrapper">
          <div className="game-info">
            <div className="phase"> 1st half</div>
            <div className="score">
              <span>Team A</span>
              <span>1</span>
              <span>4</span>
              <span>Team B</span>
            </div>
            <div className="quarter">
              <div className="points">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
              <div className="text">Quarter</div>
            </div>
          </div>
          <div className="input">
            <button>2P</button>
            <button>3P</button>
            <button>FREE THROW</button>
            <button>INBOUND</button>
            <button>STEAL</button>
            <button>TURN OVER</button>
            <button>FOUL</button>
            <button>OUT OF COURT</button>
          </div>
        </div>
        <div className="players-wrapper">
          <div className="title">
            <h2>ACTIVE PLAYERS</h2>
          </div>
          <div className="teams-wrapper">
            <div className="team">
              {players.teamA.map((num, idx) => (
                <div className="player" key={idx}>
                  <span>{num}</span>
                  <button>
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                </div>
              ))}
            </div>
            <div className="team">
              {players.teamB.map((num, idx) => (
                <div className="player" key={idx}>
                  <span>{num}</span>
                  <button>
                    <span class="material-symbols-outlined">edit</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
