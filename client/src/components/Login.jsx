// Import files
function Login() {
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="wrap">
                <div
                  className="img"
                  // Background image
                  style={{
                    backgroundImage:
                      "url('./src/assets/mahiru-shiina-wallpapers.jpg')",
                  }}
                ></div>
                <div className="login-wrap p-4 p-md-5">
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4 fw-bold">Login</h3>
                    </div>
                  </div>
                  <form action="#">
                    <div className="form-group mt-3">
                      <input type="text" className="form-control" required />
                      <label
                        className="form-control-placeholder"
                        htmlFor="username"
                      >
                        USERNAME
                      </label>
                    </div>
                    <div className="form-group">
                      <input
                        id="password-field"
                        type="password"
                        className="form-control"
                        required
                      />
                      <label
                        className="form-control-placeholder"
                        htmlFor="password"
                      >
                        PASSWORD
                      </label>
                      <span className="fa fa-fw fa-eye field-icon toggle-password"></span>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-secondary rounded submit px-3"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;
