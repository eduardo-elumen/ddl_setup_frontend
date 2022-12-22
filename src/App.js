import "./App.css";

function App() {
  return (
    <div className="App" class="container">
      <header class="p-3 bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            ></a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" class="nav-link px-2 text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-white">
                  About
                </a>
              </li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                class="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
                control-id="ControlID-1"
              ></input>
            </form>

            <div class="text-end">
              <button type="button" class="btn btn-outline-light me-2">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div class="row py-5">
          <div class="col-md-12">
            <h4 class="mb-3">Create New Tenant</h4>
            <form class="needs-validation" novalidate="">
              <div class="row g-3">
                <div class="col-sm-12">
                  <label for="firstName" class="form-label">
                    Tenant Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required=""
                    control-id="ControlID-3"
                  ></input>
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div class="col-sm-12">
                  <label for="lastName" class="form-label">
                    Canvas URL
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required=""
                    control-id="ControlID-4"
                  ></input>
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div class="col-sm-12">
                  <label for="lastName" class="form-label">
                    Canvas Token
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required=""
                    control-id="ControlID-4"
                  ></input>
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <hr class="my-4"></hr>

              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="same-address"
                  control-id="ControlID-12"
                ></input>
                <label class="form-check-label" for="same-address">
                  Fetch Users from Canvas
                </label>
              </div>

              <hr class="my-4"></hr>

              <button
                class="btn btn-primary btn-lg"
                type="submit"
                control-id="ControlID-20"
              >
                Create Tenant
              </button>
            </form>
          </div>
        </div>
      </main>
      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">© 2023 Insights</p>
      </footer>
    </div>
  );
}

export default App;
