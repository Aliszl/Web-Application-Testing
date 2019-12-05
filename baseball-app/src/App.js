// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">Baseball App</header>
//     </div>
//   );
// }

// export default App;

//TODO: STEP 1 - Import the useState hook.

import React, { useState } from "react";

// import React from "react";
import "./App.css";

// import Timer from "./Timer";

// import useState from "react";
function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  // const [awayScore, setAwayScore] = useState(0);

  // const [timeleft, setTimeLeft]= useState(60);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">at bat</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
        </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
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
            onClick={() => setHomeScore(homeScore - 7)}
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

export default App;
