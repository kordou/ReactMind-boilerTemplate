import React, { useState } from "react";
import "./App.scss";
import MindARThreeViewer from "./Components/mindar-three-viewer";

function App() {
  const [started, setStarted] = useState(null);

  return (
    <div className="App">
      <div className="container">
        <MindARThreeViewer />
      </div>
    </div>
  );
}

export default App;
