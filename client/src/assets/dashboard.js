// Import Chart.js
import Chart from "chart.js/auto";
// import "./chartData";
const createChart = (ctx) => {
  //Check if canva is rendered
  if (ctx) {
    // Destroy existing chart instance if it exists
    //
    let chartStatus = Chart.getChart("myChart"); // canva's id
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    // Create new chart
    const myChart = new Chart(ctx, {
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
            data: [23, 55, 79, 27, 27, 32, 70],
            lineTension: 0,
            backgroundColor: "transparent",
            borderColor: "#007bff",
            borderWidth: 4,
            pointBackgroundColor: "#007bff",
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
    console.error("Canvas element with id 'myChart' not found.");
  }
};

export default createChart;
