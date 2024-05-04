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
import axios from "axios";
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

  const [chartData1, setChartData1] = useState(null);
  
  
  const [chartData2, setChartData2] = useState(null);
  
  useEffect(() => {
    axios.get("http://localhost:3000/api/getRainChartData")     
    .then(res => {
      const data = res.data;
      const months = data.map(entry => entry._id);
      const maxRainPerMonths = data.map(entry => entry.maxRainPerMonth)
      const avgRainPerMonths = data.map(entry => entry.avgRainPerMonth.toFixed(2));

      
      setChartData1({
        labels: months,
        datasets: [{
          label: 'Average Rainfall ',
          data: avgRainPerMonths,
          backgroundColor: "rgba(29, 199, 234,0.2)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(29, 199, 234,0.4)",
          hoverBorderColor: "rgba(75,192,192,1)",
        }
      ]
      });

      setChartData2({
        labels: months,
        datasets: [{
          label: 'Max Rainfall',
          data: maxRainPerMonths,
          backgroundColor: "rgba(29, 199, 234,0.2)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(29, 199, 234,0.4)",
          hoverBorderColor: "rgba(75,192,192,1)",
        }
      ]
      });

    })
    .catch(err => console.log(err))
  },[])


  return (
    <>
      <div className="col-lg-6 col-md-12 col-sm-12">
        {chartData1 && <Bar options={options} data={chartData1} />}
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <Bar options={options} data={rainData2} />
      <div className="col-lg-6 col-md-12 col-sm-12">
       {chartData2 && <Bar options={options} data={chartData2} />}
      </div>
    </>
  );
}
export default RainChart;
