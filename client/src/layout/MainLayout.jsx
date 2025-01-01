import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="App">
      <div className="container-fluid main-bg">
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Sidebar />
          <Header />
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
