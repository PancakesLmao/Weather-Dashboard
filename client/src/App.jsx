import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <main>
          <Sidebar />
          <Content />
        </main>
      </div>
    </>
  );
}

export default App;
