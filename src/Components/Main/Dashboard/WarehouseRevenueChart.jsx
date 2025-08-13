import { useState } from "react";
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

export const WarehouseRevenueChart = ({ heights }) => {
  const [selectedWarehouse, setSelectedWarehouse] = useState("A");

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

  const getRandomRevenue = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  const warehouseData = {
    A: monthNames.map(() => getRandomRevenue(20000, 40000)),
    B: monthNames.map(() => getRandomRevenue(25000, 45000)),
    C: monthNames.map(() => getRandomRevenue(15000, 30000)),
  };

  const warehouseConfig = {
    A: { label: "Warehouse A", color: "#49ca87ff" },
    B: { label: "Warehouse B", color: "#ea4310ff" },
    C: { label: "Warehouse C", color: "#d4ad10ff" },
  };

  const current = warehouseConfig[selectedWarehouse];
  const data = {
    labels: monthNames,
    datasets: [
      {
        label: current.label,
        data: warehouseData[selectedWarehouse],
        backgroundColor: current.color,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
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
      y: {
        ticks: {
          callback: (value) => (value >= 1000 ? `${value / 1000}k` : value),
          font: {
            family: "'AvenirNext', sans-serif",
            weight: 500,
          },
        },
        title: {
          display: true,
          text: "Revenue (₹)",
          font: {
            family: "'AvenirNext', sans-serif",
            weight: 500,
          },
        },
      },
      x: {
        ticks: {
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
        <h2>Monthly Revenue by Warehouse</h2>
        <div className="graph_btn_group">
          {["A", "B", "C"].map((warehouse) => (
            <button
              key={warehouse}
              className={selectedWarehouse === warehouse ? "active" : ""}
              onClick={() => setSelectedWarehouse(warehouse)}
            >
              Warehouse {warehouse}
            </button>
          ))}
        </div>
      </div>
      <Bar data={data} options={options} height={heights} />
    </div>
  );
};
