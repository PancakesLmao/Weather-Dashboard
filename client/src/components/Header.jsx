// Import files
import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
//
function Header() {
  const [currentDate, setCurrentDate] = useState(new Date());
  // Clock ticking effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="row">
        {/* can change to sticky-top but meh */}
        <header className="navbar fixed-top navbar-dark bg-white flex-md-nowrap col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="col-md-6 col-lg-6 col-sm-12 mt-2 me-0 w-50 ">
            <h1
              className="navbar-brand bg-light text-dark px-3 pe-3 header-box"
              href="#"
            >
              SWB HCM, {currentDate.toLocaleString()}
              <FaLocationDot className="head-icon" />
            </h1>
          </div>
          <button
            className="navbar-toggler position-absolute d-md-none collapsed col-5 text-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-dark"></span>
          </button>
          <input
            className="form-control form-control-dark"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="navbar-nav col-1">
            <div className="nav-item text-nowrap">
              <a className="nav-link px-3" href="#">
                <button type="button" className="btn btn-outline-secondary">
                  Login
                </button>
              </a>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
