export const windData = {
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
};

export const rainData = {
  labels: ["March", "April", "May"],
  datasets: [
    {
      label: "Average Rainfall",
      backgroundColor: "rgba(29, 199, 234,0.2)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(29, 199, 234,0.4)",
      hoverBorderColor: "rgba(75,192,192,1)",
      data: [65, 59, 80],
    },
    {
      label: "Maximum",
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(75,192,192,0.4)",
      hoverBorderColor: "rgba(75,192,192,1)",
      data: [55, 49, 90],
    },
  ],
};
