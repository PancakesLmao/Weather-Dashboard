// Import Chart.js
import Chart from "chart.js/auto";
// import "./chartData";
const createChart = (ctx) => {
  //Check if canva is rendered
  if (ctx) {
    // Destroy existing chart instance if it exists
    //
    let chartStatus = Chart.getChart("windChart"); // canva's id
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    // Create new chart
    const windChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        datasets: [
          {
            label: "Average wind speed (m/s)",
            data: [5, 2, 5, 10, 7, 2, 6],
            lineTension: 0,
            backgroundColor: "transparent",
            borderColor: "#007bff",
            borderWidth: 4,
            pointBackgroundColor: "#007bff",
          },
          {
            label: "Max wind speed (m/s)",
            data: [15, 26, 15, 17, 19, 12, 12],
            lineTension: 0,
            backgroundColor: "transparent",
            borderColor: "#FE777B",
            borderWidth: 4,
            pointBackgroundColor: "#FE777B",
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  } else {
    console.error("Canvas element with id 'windChart' not found.");
  }
};

export default createChart;
