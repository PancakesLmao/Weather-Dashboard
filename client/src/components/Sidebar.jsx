// import files
import { Outlet, Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoIosHome } from "react-icons/io";
import { BiSolidReport } from "react-icons/bi";
import { FaGoogleDrive } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
//
function Sidebar() {
  const PageLocation = useLocation();
  // console.log(PageLocation);
  return (
    <>
      <div className="sideBar">
        <nav
          id="sidebarMenu"
          data-color="black"
          className="col-md-3 col-lg-2 d-md-block sidebar collapse container"
        >
          <div className="position-sticky text-white side-content side-wrapper">
            <ul className="nav flex-column">
              <div className="container logo">
                <h3 className="nav-brand px-2">AsianMurphy</h3>
              </div>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                >
                  <IoIosHome className="side-icon" />
                  &nbsp;Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/dashboard" ? "active" : ""
                  }`}
                  to="/dashboard"
                >
                  <RxDashboard className="side-icon" />
                  &nbsp;Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/reports" ? "active" : ""
                  }`}
                  to="/reports"
                >
                  <BiSolidReport className="side-icon" />
                  &nbsp;Reports
                </Link>
              </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-light">
              <span>Saved reports</span>

              <a
                className="link-secondary"
                href="#"
                aria-label="Add a new report"
              >
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaGoogleDrive className="slide-icon" />
                  &nbsp;Google Drive
                </a>
              </li>
            </ul>
            <ul>
              <div className="navbar-nav col-2">
                <div className="nav-item text-nowrap">
                  <Link to="/login" className="nav-link px-3">
                    <button type="button" className="btn btn-outline-light">
                      <MdOutlineLogin className="login-icon" />
                      &nbsp; Login
                    </button>
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </nav>
        {/* Menu Toggler */}
        {/* <button
          className="navbar-toggler mt-4 fixed-top d-md-none collapsed text-dark w-25"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <IoMenu className="navbar-toggler-icon text-dark" />
        </button> */}
      </div>
      <Outlet />
    </>
  );
}

export default Sidebar;
