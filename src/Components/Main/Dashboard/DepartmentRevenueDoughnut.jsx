import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const DepartmentRevenueDoughnut = () => {
  const data = {
    labels: ["Sales", "Marketing", "HR", "Engineering", "Finance"],
    datasets: [
      {
        label: "Revenue (₹)",
        data: [500000, 300000, 100000, 700000, 200000],
        backgroundColor: [
          "#00963e",
          "#52ac32",
          "#95c324",
          "#bfcf12",
          "#dcdc00",
        ],
        borderColor: ["#00963e", "#52ac32", "#95c324", "#bfcf12", "#dcdc00"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          font: {
            family: "'AvenirNext', sans-serif",
            weight: 500,
            size: 12,
          },
        },
      },
      tooltip: {
        bodyFont: {
          family: "'AvenirNext', sans-serif",
          weight: 500,
        },
        titleFont: {
          family: "'AvenirNext', sans-serif",
          weight: 500,
        },
      },
    },
    layout: {
      padding: 10,
    },
    responsive: true,
  };

  return (
    <div className="app_full_width_graph">
      <div className="app_graph_headfing">
        <h2>Department-wise Revenue Distribution</h2>
      </div>
      <Doughnut data={data} options={options} height={60} />
    </div>
  );
};
