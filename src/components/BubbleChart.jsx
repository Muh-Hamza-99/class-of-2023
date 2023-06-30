import React from "react";
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = ({ data, startAtZero=true, callbacks, suggestedMinY, suggestedMaxY, suggestedMinX, suggestedMaxX, showXTicks=true, showYTicks=true, showXLabel=false, showYLabel=false, XLabel, YLabel }) => {
  const options = {
    plugins: {
      tooltip: {
        backgroundColor: "#36393f55",
        bodyColor: "#FFF",
        padding: 10,
        displayColors: false,
        callbacks: callbacks,
        xAlign: "center",
        yAlign: "bottom",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: startAtZero,
        suggestedMin: suggestedMinX,
        suggestedMax: suggestedMaxX,
        ticks: { display: showXTicks },
      },
      y: { 
        suggestedMin: suggestedMinY, 
        suggestedMax: suggestedMaxY,
        ticks: { display: showYTicks },
      },
    },
  };
  return <Bubble data={ data } options={options} />;
};

export default BubbleChart;