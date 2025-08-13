import { useState } from "react";
import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const AccountsLineChart = ({ heights }) => {
  const [range, setRange] = useState("month");

  const generateData = (range) => {
    const labels = [];
    const receivable = [];
    const payable = [];

    const now = new Date();
    const getRandom = (min, max) =>
      Math.floor(Math.random() * (max - min) + min);

    if (range === "month") {
      for (let i = 1; i <= 30; i++) {
        labels.push(`D-${i}`);
        receivable.push(getRandom(2000, 5000));
        payable.push(getRandom(1000, 4000));
      }
    } else if (range === "6months") {
      const months = [
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
        labels.push(months[month]);
        receivable.push(getRandom(20000, 40000));
        payable.push(getRandom(15000, 35000));
      }
    } else if (range === "year") {
      for (let i = 1; i <= 12; i++) {
        labels.push(`M-${i}`);
        receivable.push(getRandom(30000, 60000));
        payable.push(getRandom(20000, 50000));
      }
    }

    return {
      labels,
      datasets: [
        {
          label: "Receivable",
          data: receivable,
          backgroundColor: "#dcdc00",
          fill: true,
          borderColor: "#dcdc00",
          borderWidth: 2,
          pointBackgroundColor: "white",
          pointBorderColor: "#dcdc00",
          pointRadius: 4,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
        },
        {
          label: "Payable",
          data: payable,
          borderColor: "#00963e",
          backgroundColor: "#00963e",
          fill: true,
          borderWidth: 2,
          pointBackgroundColor: "white",
          pointBorderColor: "#00963e",
          pointRadius: 4,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
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
        font: {
          family: "'AvenirNext', sans-serif",
          weight: 500,
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
            return value >= 1000 ? value / 1000 + "k" : value;
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
        <h2>Accounts Receivable vs Payable</h2>
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
      <Line data={generateData(range)} options={options} height={heights} />
    </div>
  );
};
