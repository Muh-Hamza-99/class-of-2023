import React from "react";
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = ({ data, startAtZero=true, callbacks }) => {
  const options = {
    plugins: {
      tooltip: {
        backgroundColor: "#36393f55",
        bodyColor: "#FFF",
        padding: 10,
        displayColors: false,
        callbacks: callbacks,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: startAtZero,
      },
    },
  };
  return <Bubble data={ data } options={options} />;
};

export default BubbleChart;