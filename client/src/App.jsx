import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import "./App.css";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className="container-fluid main-bg">
            <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Sidebar />
              <Header />
              {/* Router */}

              <Routes>
                <Route index element={<Login />} />
                <Route path="/" element={<Content />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Content />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
