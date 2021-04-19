import React, { useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Sidebar, Header } from "./Components";
import { Dashboard } from "./Pages";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar((showSidebar) => !showSidebar);
  };

  return (
    <div className="App">
      {showSidebar && <Sidebar />}
      <div className="main">
        <Header toggle={toggleSidebar} />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
