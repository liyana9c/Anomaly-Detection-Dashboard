import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const RealTimeMonitoring = ({ data }) => {
  return (
    <div className="px-2 mb-2 mt-2 bg-opacity-80 bg-slate-800  rounded-lg text-white mt-2 py-20">
      <h2 className="text-xl ">Real-Time Monitoring</h2>
      <Line data={data} />
    </div>
  );
};

export default RealTimeMonitoring;
