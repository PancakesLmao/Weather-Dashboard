import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { rainData } from "../assets/chartData";
//
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Average Rain (mm)",
    },
  },
};

function RainChart() {
  //   const [chartData, setChartData] = useState(rainData);
  return (
    <>
      <div className="col-6">
        <Bar data={rainData} options={options} />
      </div>
    </>
  );
}
export default RainChart;
