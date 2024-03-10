import { useSelector } from "react-redux";

import { Line } from "react-chartjs-2";
import { Chart } from "react-chartjs-2";
import Chartjs from "chart.js/auto";

const WindCharts = () => {
  const meteoDataFromRedux = useSelector((state) => {
    return state.content[0];
  });
  if (meteoDataFromRedux) {
    const windData = {
      labels: ["now", "next hour", "2 hours later", "3 hours later"],
      datasets: [
        {
          label: "Wind Speed",
          data: [
            meteoDataFromRedux[0].wind.speed,
            meteoDataFromRedux[1].wind.speed,
            meteoDataFromRedux[2].wind.speed,
            meteoDataFromRedux[3].wind.speed,
          ],
          borderColor: "blue",
          fill: false,
        },
      ],
    };
    const options = {
        scales: {
          x: {
            type: 'category',
            labels: ["now", "next hour", "2 hours later", "3 hours later"],
          },
          y: {
            type: 'linear',
            beginAtZero: true,
          },
        },
      };

    return <Line data={windData} options={options} />;
  }
};
export default WindCharts;
