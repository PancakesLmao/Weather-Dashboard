// Import files
import React, { useState, useEffect } from "react";
import WindChart from "./windChart";
import RainChart from "./rainChart";
import { LuWaves } from "react-icons/lu";

// icons
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";

function Dashboard() {
  // set stage for loading page
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      // Till the data is fetch using API
      // the Loading page will show.
      setLoading(true);

      // Await make wait until that
      // promise settles and return its result
      // const response = await fetch('https://jsonplaceholder.typicode.com/posts/');

      // After fetching data stored it in posts state.

      // Closed the loading page
      setLoading(false);
    };

    // Call the function
    loadPost();
  }, []);
  return (
    <>
        <main className="mt-5">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2 mt-3">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2"></div>
            </div>
          </div>

          {/* Card data */}
          <div className="row">
            {/* 1st Card */}
            <div className="col-xl-3 col-md-6">
              <div className="card card-stats">
                <div className="card-body">
                  <div className="row">
                    <div className="col-5">
                      <div className="icon-big text-center">
                        <div className="icon-warning">
                          <i className="nc-icon nc-chart text-warning"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-7">
                      <div className="numbers">
                        <div>
                          <p className="card-category">Status</p>
                          <h4 className="card-title">
                            <span className="badge badge-success">0</span>
                            Online
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="stats text-muted">
                    <div>Updated now</div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd Card */}
            <div className="col-xl-3 col-md-6">
              <div className="card card-stats">
                <div className="card-body">
                  <div className="row">
                    <div className="col-5">
                      <div className="icon-big text-center">
                        <div className="sensor-icon">
                          <FaTemperatureHigh />
                        </div>
                      </div>
                    </div>
                    <div className="col-7">
                      <div className="numbers">
                        <div>
                          <p className="card-category">Temperature</p>
                          <h4 className="card-title">31°C</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="stats text-muted">
                    <div>Yesterday</div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3rd Card */}
            <div className="col-xl-3 col-md-6">
              <div className="card card-stats">
                <div className="card-body">
                  <div className="row">
                    <div className="col-5">
                      <div className="icon-big text-center">
                        <div className="sensor-icon">
                          <WiHumidity />
                        </div>
                      </div>
                    </div>
                    <div className="col-7">
                      <div className="numbers">
                        <div>
                          <p className="card-category">Humidity</p>
                          <h4 className="card-title">63%</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="stats text-muted">
                    <div>Yesterday</div>
                  </div>
                </div>
              </div>
            </div>
            {/* 4th Card */}
            <div className="col-xl-3 col-md-6">
              <div className="card card-stats">
                <div className="card-body">
                  <div className="row">
                    <div className="col-5">
                      <div className="icon-big text-center">
                        <div className="sensor-icon">
                          <LuWaves />
                        </div>
                      </div>
                    </div>
                    <div className="col-7">
                      <div className="numbers">
                        <div>
                          <p className="card-category">Barometric Pressure</p>
                          <h4 className="card-title">101.325 Pa</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="stats text-muted">
                    <div>Updated now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Graph / Diagram */}
          <div className="row my-4">
            {/* <canvas
                className="my-4 w-100"
                id="windChart"
                width="800"
                height="180"
                ></canvas> */}
            {/* Wind statistic */}
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="card h-100">
                <div className="card-body">
                  {/* 1st row */}
                  <div className="row">
                    <div className="col-5">
                      <div className="icon-big text-center">
                        <div className="icon-info"></div>
                      </div>
                    </div>
                    <div className="col-7">
                      <div className="numbers">
                        <div>
                          <p className="card-category">Avg Wind Speed</p>
                          <h4 className="card-title">0 m/s</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* 2nd row */}
                  <div className="row">
                    <div className="col-5">
                      <div className="icon-big text-center">
                        <div className="icon-info"></div>
                      </div>
                    </div>
                    <div className="col-7">
                      <div className="numbers">
                        <div>
                          <p className="card-category">Max Wind Speed</p>
                          <h4 className="card-title">0 m/s</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* 3rd row */}
                  <div className="row">
                    <div className="col-5">
                      <div className="icon-big text-center">
                        <div className="icon-info"></div>
                      </div>
                    </div>
                    <div className="col-7">
                      <div className="numbers">
                        <div>
                          <p className="card-category">Wind Direction</p>
                          <h4 className="card-title">0 °</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="stats text-muted">
                    <div>Updated now</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Wind chart */}
            <WindChart />
          </div>
          <div className="row my-4">
            <RainChart />
          </div>

          {/* Records */}
          <h2>Datasheet</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Temperature (C)</th>
                  <th scope="col">Humidity (%)</th>
                  <th scope="col">Barometric Pressure (Pascals)</th>
                  <th scope="col">Average wind speed (m/s)</th>
                  <th scope="col">Max wind speed (m/s)</th>
                  <th scope="col">Wind direction (degree)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>random</td>
                  <td>data</td>
                  <td>placeholder</td>
                  <td>text</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>1,002</td>
                  <td>placeholder</td>
                  <td>irrelevant</td>
                  <td>visual</td>
                  <td>layout</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>data</td>
                  <td>rich</td>
                  <td>dashboard</td>
                  <td>tabular</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>information</td>
                  <td>placeholder</td>
                  <td>illustrative</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,004</td>
                  <td>text</td>
                  <td>random</td>
                  <td>layout</td>
                  <td>dashboard</td>
                </tr>
                <tr>
                  <td>1,005</td>
                  <td>dashboard</td>
                  <td>irrelevant</td>
                  <td>text</td>
                  <td>placeholder</td>
                </tr>
                <tr>
                  <td>1,006</td>
                  <td>dashboard</td>
                  <td>illustrative</td>
                  <td>rich</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,007</td>
                  <td>placeholder</td>
                  <td>tabular</td>
                  <td>information</td>
                  <td>irrelevant</td>
                </tr>
                <tr>
                  <td>1,008</td>
                  <td>random</td>
                  <td>data</td>
                  <td>placeholder</td>
                  <td>text</td>
                </tr>
                <tr>
                  <td>1,009</td>
                  <td>placeholder</td>
                  <td>irrelevant</td>
                  <td>visual</td>
                  <td>layout</td>
                </tr>
                <tr>
                  <td>1,010</td>
                  <td>data</td>
                  <td>rich</td>
                  <td>dashboard</td>
                  <td>tabular</td>
                </tr>
                <tr>
                  <td>1,011</td>
                  <td>information</td>
                  <td>placeholder</td>
                  <td>illustrative</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,012</td>
                  <td>text</td>
                  <td>placeholder</td>
                  <td>layout</td>
                  <td>dashboard</td>
                </tr>
                <tr>
                  <td>1,013</td>
                  <td>dashboard</td>
                  <td>irrelevant</td>
                  <td>text</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <td>1,014</td>
                  <td>dashboard</td>
                  <td>illustrative</td>
                  <td>rich</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,015</td>
                  <td>random</td>
                  <td>tabular</td>
                  <td>information</td>
                  <td>text</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* END OF CONTENT PAGE */}
        </main>
    </>
  );
}

export default Dashboard;
