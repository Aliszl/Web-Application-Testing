import React, { useState } from "react";
import Display from "./components/Display";
// import Dashboard from "./components/Dashboard";

import "./App.css";

function App() {
  const [homeScore, setHomeScore] = useState(0);

  return (
    <div>
      <h1>baseball sucks</h1>
      <Display />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
