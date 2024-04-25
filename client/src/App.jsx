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
        <div className="container-fluid main-bg">
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Sidebar />
            <Header />
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
