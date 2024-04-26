// import files
import { Outlet, Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoIosHome } from "react-icons/io";
import { BiSolidReport } from "react-icons/bi";
import { FaGoogleDrive } from "react-icons/fa";
//
function Sidebar() {
  return (
    <>
      <div className="sideBar">
        <nav
          id="sidebarMenu"
          data-color="black"
          className="col-md-3 col-lg-2 d-md-block sidebar collapse container"
        >
          <div className="position-sticky text-white side-content">
            <div className="container logo">
              <h3 className="nav-brand px-2">AsianMurphy</h3>
            </div>

            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link" aria-current="page" href="#">
                    <IoIosHome className="side-icon" />
                    &nbsp;Home
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/dashboard">
                  <a className="nav-link active" href="#">
                    <RxDashboard className="side-icon" />
                    &nbsp;Dashboard
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/reports">
                  <a className="nav-link" href="#">
                    <BiSolidReport className="side-icon" />
                    &nbsp;Reports
                  </a>
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
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Sidebar;
