import React from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend); 

const BarChart = ({ data, stacked=false }) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#36393f55",
        bodyColor: "#FFF",
        padding: 10,
        displayColors: false,
      },
    },
    responsive: true,
    scales: {
      y: {
        stacked,
      },
      x: {
        stacked,
      },
    },
  };
  return (
    <Bar data={data} options={options}>
    </Bar>
  );
};

export default BarChart;