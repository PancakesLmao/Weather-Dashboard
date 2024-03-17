import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header/>
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
