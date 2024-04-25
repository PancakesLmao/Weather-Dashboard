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
import { rainData1, rainData2 } from "../assets/chartData";
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
      position: 'bottom',
    },
    title: {
      display: true,
      text: "Rainfall in day (mm)",
    },
  },
};

function RainChart() {
  //   const [chartData, setChartData] = useState(rainData);
  return (
    <>
      <div className="col-6">
        <Bar options={options} data={rainData1} />
      </div>
      <div className="col-6">
        <Bar options={options} data={rainData2} />
      </div>
    </>
  );
}
export default RainChart;
