import React, { useEffect, useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, BarElement, ArcElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { generateSyntheticData } from '../generateSyntheticData';

ChartJS.register(LineElement, BarElement, ArcElement, PointElement, LinearScale, Title, CategoryScale);

const SystemPerformance = () => {
  const [data, setData] = useState(generateSyntheticData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateSyntheticData());
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-opacity-80 bg-slate-800 rounded-lg text-white mt-2">
      <h2 className="text-xl mb-4">System Performance</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className='mt-2 bg-slate-700 bg-opacity-30 rounded-lg p-2 ' >
          <h3 className="text-lg mb-2 ">Anomaly Detection Accuracy Over Time</h3>
          <Line data={data.accuracyData} />
        </div>
        <div className='mt-2 bg-slate-700 bg-opacity-30 rounded-lg p-2 ' >
          <h3 className="text-lg mb-2">False Positive Rate</h3>
          <Bar data={data.falsePositiveData} />
        </div>
        <div className='mt-2 bg-slate-700 bg-opacity-30 rounded-lg p-2 ' >
          <h3 className="text-lg mb-2">Response Time Distribution</h3>
          <Bar data={data.responseTimeData} />
        </div>
        <div className="mt-2 bg-slate-700 bg-opacity-30 rounded-lg p-2 ">
      <h3 className="text-lg mb-2">Top Anomaly Types</h3>
      <Pie data={data.anomalyTypeData} />
    </div>
      </div>
    </div>
  );
};

export default SystemPerformance;
