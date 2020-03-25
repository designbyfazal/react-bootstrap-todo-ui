import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main_content/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper container">
        {/* {Sidebar} */}
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="main-content card">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
