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

export const ExpensesGrossProfitChart = ({ heights }) => {
  const [range, setRange] = useState("month");

  const generateChartData = (range) => {
    const labels = [];
    const expenses = [];
    const grossProfit = [];
    const now = new Date();

    const getRandom = (min, max) =>
      Math.floor(Math.random() * (max - min) + min);

    if (range === "month") {
      for (let i = 1; i <= 30; i++) {
        labels.push(`D-${i}`);
        expenses.push(getRandom(500, 1000));
        grossProfit.push(getRandom(800, 1500));
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
        expenses.push(getRandom(10000, 15000));
        grossProfit.push(getRandom(18000, 25000));
      }
    } else if (range === "year") {
      for (let i = 1; i <= 12; i++) {
        labels.push(`M-${i}`);
        expenses.push(getRandom(12000, 20000));
        grossProfit.push(getRandom(20000, 30000));
      }
    }

    return {
      labels,
      datasets: [
        {
          label: "Expenses",
          data: expenses,
          backgroundColor: "#dcdc00",
        },
        {
          label: "Gross Profit",
          data: grossProfit,
          backgroundColor: "#00963e",
        },
      ],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
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
            return value >= 1000 ? `${value / 1000}k` : value;
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
        <h2>Expenses vs Gross Profit</h2>
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
        </div>
      </div>
      <Bar data={generateChartData(range)} options={options} height={heights} />
    </div>
  );
};
