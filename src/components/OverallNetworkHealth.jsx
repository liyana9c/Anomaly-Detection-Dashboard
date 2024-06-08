// src/components/OverallNetworkHealth.jsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const OverallNetworkHealth = ({ status, metrics }) => {
  const data = {
    labels: ['Critical', 'Warning', 'Normal'],
    datasets: [
      {
        data: [20, 30, 50],

        backgroundColor: ['#7E29E2', '#4242ED', '#FB3DB7'],
        hoverBackgroundColor: [
  '#5300e2', // Darker shade of #7E29E2
  '#1f1fff', // Darker shade of #4242ED
  '#e31a8c', // Darker shade of #FB3DB7
],
      },
    ],
  };
  const options = {
    cutout: '70%', // Adjust to make it look more like a gauge
    rotation: 270,
    circumference: 180,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${data.labels[tooltipItem.dataIndex]}: ${data.datasets[0].data[tooltipItem.dataIndex]}%`;
          },
        },
      },
    },
  };

  return (
    <div className=" px-28 mb-2 mt-3 bg-opacity-80 bg-slate-800 rounded-lg text-white text-center ">
      <div className="text-3xl mb-8 py-1">Overall Network Health</div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default OverallNetworkHealth;
