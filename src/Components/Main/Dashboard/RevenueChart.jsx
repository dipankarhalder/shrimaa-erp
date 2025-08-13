import React, { useState } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const RevenueChart = ({ heights }) => {
  const [range, setRange] = useState("month");

  const generateData = (range) => {
    const labels = [];
    const data = [];
    const now = new Date();

    if (range === "month") {
      for (let i = 1; i <= 30; i++) {
        labels.push(`D-${i}`);
        data.push(Math.floor(Math.random() * 500 + 200));
      }
    } else if (range === "6months") {
      const monthNames = [
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
      ];
      const currentMonth = now.getMonth();
      for (let i = 5; i >= 0; i--) {
        let month = (currentMonth - i + 12) % 12;
        labels.push(monthNames[month]);
        data.push(Math.floor(Math.random() * 10000 + 5000));
      }
    } else if (range === "year") {
      for (let i = 0; i < 12; i++) {
        labels.push(`M-${i + 1}`);
        data.push(Math.floor(Math.random() * 18000 + 8000));
      }
    } else if (range === "year2") {
      for (let i = 0; i < 24; i++) {
        labels.push(`M-${i + 1}`);
        data.push(Math.floor(Math.random() * 18000 + 8000));
      }
    } else if (range === "year3") {
      for (let i = 0; i < 36; i++) {
        labels.push(`M-${i + 1}`);
        data.push(Math.floor(Math.random() * 18000 + 8000));
      }
    }

    return {
      labels,
      datasets: [
        {
          label: "Total Revenue",
          data,
          borderColor: "#93c21c",
          backgroundColor: "#93c21c",
          fill: true,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `₹${context.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: "'AvenirNext', sans-serif",
            weight: 500,
          },
        },
      },
      y: {
        ticks: {
          callback: function (value) {
            if (value >= 1000) {
              return value / 1000 + "k";
            }
            return value;
          },
          font: {
            family: "'AvenirNext', sans-serif",
            weight: 500,
          },
        },
      },
    },
  };

  return (
    <div className="app_full_width_graph">
      <div className="app_graph_headfing">
        <h2>Total Revenue</h2>
        <div className="graph_btn_group">
          <button
            className={range === "month" ? "active" : ""}
            onClick={() => setRange("month")}
          >
            This Month
          </button>
          <button
            className={range === "6months" ? "active" : ""}
            onClick={() => setRange("6months")}
          >
            Last 6 Months
          </button>
          <button
            className={range === "year" ? "active" : ""}
            onClick={() => setRange("year")}
          >
            Last 1 Year
          </button>
          <button
            className={range === "year2" ? "active" : ""}
            onClick={() => setRange("year2")}
          >
            Last 2 Years
          </button>
          <button
            className={range === "year3" ? "active" : ""}
            onClick={() => setRange("year3")}
          >
            Last 3 Years
          </button>
        </div>
      </div>
      <Bar data={generateData(range)} options={options} height={heights} />
    </div>
  );
};
