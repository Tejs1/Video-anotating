import React, { useRef, useState } from "react";
import "./App.css";
const App = () => {
  const videoRef = useRef();
  const [players, setPlayers] = useState({
    teamA: [2, 3, 4, 12, 8],
    teamB: [3, 13, 11, 8, 3],
  });
  return (
    <main className="App">
      <section className="videoTimeline">
        <div className="video-wrapper">video</div>
        <div className="timeline-wrapper">Timeline</div>
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
              {players.teamA.map((num) => (
                <div className="player">
                  <span>{num}</span>
                  <button>
                    <span class="material-symbols-outlined">edit</span>
                  </button>
                </div>
              ))}
            </div>
            <div className="team">
              {players.teamB.map((num) => (
                <div className="player">
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

<div className="player">
  <span>3</span>
  <button>
    <span class="material-symbols-outlined">edit</span>
  </button>
</div>;
