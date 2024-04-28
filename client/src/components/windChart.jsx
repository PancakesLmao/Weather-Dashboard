import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {Line} from 'react-chartjs-2'
import axios from "axios";

//
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function WindChart() {

 const [chartData, setChartData] = useState(null);


  useEffect(() => {
    axios.get("http://localhost:3000/api/getWindChartData")     
    .then(res => {
      const data = res.data;
      const dates = data.map(entry => entry._id);
      const maxWindSpeeds = data.map(entry => entry.maxWindSpeed)
      const avgWindSpeeds = data.map(entry => entry.avgWindSpeed.toFixed(2));
      console.log("Dates", dates);
      console.log("avgWindSpeeds", avgWindSpeeds);
      setChartData({
        labels: dates,
        datasets: [{
          label: 'Average wind speed (m/s)',
          data: avgWindSpeeds,
          fill: false,
          backgroundColor: "transparent",
          borderColor: "#007bff",
          borderWidth: 2,
          pointBackgroundColor: "#007bff"
        },
        {
          label: "Max wind speed (m/s)",
          data: maxWindSpeeds,
          lineTension: 0,
          backgroundColor: "transparent",
          borderColor: "#FE777B",
          borderWidth: 4,
          pointBackgroundColor: "#FE777B",
        },
      ]
      });

    })
    .catch(err => console.log(err))
  },[])


  return (
    <>
      <div className="col-9">
       {chartData && <Line data={chartData}/>}
      </div>
    </>
  );
}

export default WindChart;
