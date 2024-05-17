// Import files
import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineLogin } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
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
      <header className="navbar fixed-top navbar-dark bg-secondary col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-light">
        <div className="row">
          {/* can change to sticky-top but meh */}
          <div className="col-sm-2 px-3">
            <button
              className="navbar-toggler d-md-none collapsed text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span className="navbar-toggler-icon text-dark">=</span> */}
              <IoMenu className="navbar-toggler-icon text-dark" />
            </button>
          </div>
          {/* <div className="col">
            <h1 className="navbar-brand bg-light text-dark px-3 pe-3 header-box">
              SWB HCM, {currentDate.toLocaleString()} &nbsp;
              <FaLocationDot className="head-icon" />
            </h1>
          </div> */}
          <div className="col-lg-12 col-sm-10">
            <Dropdown as={ButtonGroup}>
              <Button variant="white" className="fw-bold">
                SWB HCM, {currentDate.toLocaleString()} &nbsp;
              </Button>

              <Dropdown.Toggle
                split
                variant="secondary"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">SWB HCM</Dropdown.Item>
                <Dropdown.Item href="#/action-2">SWB HN</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {/* <div className="">
            <input
              className="form-control form-control-dark"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div> */}
        </div>
      </header>
    </>
  );
}

export default Header;
