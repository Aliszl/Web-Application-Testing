import React, { useState } from "react";

export default function Dashboard() {
  const [homeScore, setHomeScore] = useState(0);

  return (
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
  );
}
