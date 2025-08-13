import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const departments = ["HR", "Engineering", "Sales", "Marketing", "Finance"];
const employeeCounts = [12, 35, 20, 18, 10];

const data = {
  labels: departments,
  datasets: [
    {
      label: "Employees per Department",
      data: employeeCounts,
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
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

export const DepartmentLineChart = () => {
  return (
    <div className="app_full_width_graph">
      <div className="app_graph_headfing">
        <h2>Department-wise Employee Distribution</h2>
      </div>
      <Doughnut data={data} options={options} height={60} />
    </div>
  );
};
