import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Male", "Female", "Non-binary", "Transgender"],
  datasets: [
    {
      label: "Gender Distribution",
      data: [45, 30, 12, 8],
      backgroundColor: ["#00963e", "#52ac32", "#95c324", "#bfcf12"],
      borderColor: ["#00963e", "#52ac32", "#95c324", "#bfcf12"],
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

export const GenderDoughnutChart = () => {
  return (
    <div className="app_full_width_graph">
      <div className="app_graph_headfing">
        <h2>Gender-wise Employee Distribution</h2>
      </div>
      <Doughnut data={data} options={options} height={60} />
    </div>
  );
};
