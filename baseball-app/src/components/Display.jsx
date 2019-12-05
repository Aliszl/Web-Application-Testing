import React, { useState } from "react";
export default function Display() {
  const [homeScore, setHomeScore] = useState(0);

  return (
    // scoreboard display
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">at bat</h2>

            <div className="home__score">{homeScore}</div>
          </div>
        </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button
            className="homeButtons__touchdown"
            onClick={() => setHomeScore(homeScore + 1)}
          >
            Strike
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setHomeScore(homeScore + 1)}
          >
            Ball
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setHomeScore(homeScore + 2)}
          >
            Foul
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setHomeScore(0)}
          >
            Hit
          </button>
          <br />
        </div>
      </section>
    </div>
  );
}
