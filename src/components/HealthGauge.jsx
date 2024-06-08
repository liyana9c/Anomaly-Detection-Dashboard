import React from 'react';

const HealthGauge = ({ status }) => {
  const color = status === 'Normal' ? 'green' : status === 'Warning' ? 'yellow' : 'red';
  return (
    <div className="px-2 py-10 bg-gray-500 bg-opacity-80 rounded-lg text-center">
      <div className={`text-4xl text-${color}-500`}>{status}</div>
      <div className="text-white mt-2">Overall Network Health</div>
    </div>
  );
};

export default HealthGauge;
