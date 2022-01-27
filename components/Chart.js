import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Runnning Data',
    },
  },
};

export default function Chart({chartData, num_data}) {
  if (num_data === 0) {
    return <div>NO data</div>;
  }
  const data = [];
  for (const d of chartData) {
      const entry = {x: d.cadence, y: d.pace};
      data.push(entry);
  }

  return (
      <div>
        <Line
          data={{datasets: [{label: 'pace vs cadence', data: data}]}}
          width='200'
          height='400'
          options={options}
        />
      </div>
    );
}