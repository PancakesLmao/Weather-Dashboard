// Import files
import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { TablePagination } from "@mui/base/TablePagination";
import { CustomTablePagination } from "../css/tablePagination";

import WindChart from "./windChart";
import RainChart from "./rainChart";
import axios from "axios";
import { LuWaves } from "react-icons/lu";

// icons
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

function Content() {
  // set stage for loading page
  const [loading, setLoading] = useState(false);

  //  Weather Data

  //  Current Weather Data
  const [latestWeatherData, setLatestWeatherData] = useState([{}]);

  // All Weather Data
  const [weatherData, setWeatherData] = useState([{}]);

  // Table Pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - weatherData.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  //
  console.log(weatherData.length);
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

    // Fetch current weather data
    axios
      .get("http://localhost:3000/api/getCurrent")
      .then((currWeather) => setLatestWeatherData(currWeather.data))
      .catch((err) => console.log(err));

    // Fetch all weather data
    axios
      .get("http://localhost:3000/api/getAll")
      .then((weather) => setWeatherData(weather.data))
      .catch((err) => console.log(err));

    // Call the function
    loadPost();
  }, []);
  return (
    <>
      <div className="mt-5">
        {/* Loading */}
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <main className="">
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
                            <h4 className="card-title">
                              {latestWeatherData[0].temp}°C
                            </h4>
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
                            <h4 className="card-title">
                              {latestWeatherData[0].humidity}%
                            </h4>
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
                            <h4 className="card-title">
                              {latestWeatherData[0].baroPressure} Pa
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
              <div className="col-3">
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
                            <h4 className="card-title">
                              {latestWeatherData[0].avgWindSpd} m/s
                            </h4>
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
                            <h4 className="card-title">
                              {latestWeatherData[0].mxWindSpd} m/s
                            </h4>
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
                            <h4 className="card-title">
                              {latestWeatherData[0].windDirect} °
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
              {/* Wind chart */}
              <WindChart />
            </div>

            {/* Rain Chart */}
            <RainChart />

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
                    <th scope="col">Rain per Hour (mm)</th>
                    <th scope="col">Rain per Day (mm)</th>
                  </tr>
                </thead>
                <tbody>
                  {weatherData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(function (weather, index) {
                      return (
                        <tr key={index}>
                          <td scope="row">{weather.recordDate}</td>
                          <td scope="row">{weather.temp}</td>
                          <td scope="row">{weather.humidity}</td>
                          <td scope="row">{weather.baroPressure}</td>
                          <td scope="row">{weather.avgWindSpd}</td>
                          <td scope="row">{weather.mxWindSpd}</td>
                          <td scope="row">{weather.windDirect}</td>
                          <td scope="row">{weather.rainPerHr}</td>
                          <td scope="row">{weather.rainPerDay}</td>
                        </tr>
                      );
                    })}
                </tbody>
                {/* Table Pagination */}
                <tfoot>
                  <tr>
                    <CustomTablePagination
                      className="pagination"
                      rowsPerPageOptions={[20, 50, 100]}
                      colSpan={3}
                      count={weatherData.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      slotProps={{
                        select: {
                          "aria-label": "rows per page",
                        },
                        actions: {
                          showFirstButton: true,
                          showLastButton: true,
                        },
                      }}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </tr>
                </tfoot>
              </table>
            </div>
            {/* END OF CONTENT PAGE */}
          </main>
        )}
      </div>
    </>
  );
}

export default Content;
