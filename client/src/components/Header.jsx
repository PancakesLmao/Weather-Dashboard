function Header() {
  return (
    <>
      <div className="row">
        {/* can change to sticky-top but meh */}
        <header className="navbar fixed-top navbar-dark bg-dark flex-md-nowrap col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h1 className="navbar-brand col-md-3 col-lg-2 me-0 bg-light text-dark w-50 px-3 mt-2" href="#">
            SWB HCM, 21 Apr 2024, 05:39:22
          </h1>
          <button
            className="navbar-toggler position-absolute d-md-none collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <input
            className="form-control form-control-dark"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="navbar-nav">
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
