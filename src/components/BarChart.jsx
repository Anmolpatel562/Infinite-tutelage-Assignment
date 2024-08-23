// BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components in Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data,mobileView }) => {
  let fontSize = 12;
  if(mobileView){
    fontSize = 8;
  }
  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines on x-axis
        },
        border: {
          display: false, // Hides the bottom line on the x-axis
        },
        ticks: {
          font: {
            size:fontSize, // Adjust the font size here (e.g., 12px)
          },
        },
      },
      y: {
        grid: {
          display: false, // Hide grid lines on y-axis
        },
        beginAtZero: true, // Ensure y-axis starts from 0
        ticks: {
          stepSize: 250,
          // Consistent step size for equal spacing
          callback: function (value) {
            // Display only specific y-axis values
            if ([0, 250, 500, 1000, 1500].includes(value)) {
              return `$${value}`;
            }
            return null; // Hide other values
          },
        },
        min: 0,
        max: 1500, // Set the maximum value for the y-axis
      },
    },
    plugins: {
      legend: {
        display: false, // Completely hide the legend (removes colored square)
      },
    },
  };
  // Define the data for the chart
  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // Months
    datasets: [
      {
        label: "",
        data: data,
        backgroundColor: "#AD8EDD",
        borderRadius: 5,
        barPercentage: 0.8,
        categoryPercentage: 0.6,
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
