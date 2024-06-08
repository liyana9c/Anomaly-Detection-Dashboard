import React from 'react';

const Metrics = ({ metrics }) => {
  return (
    <div className="grid grid-cols-4 gap-2 mt-2">
      {metrics.map((metric, index) => (
        <div key={index} className="py-4 bg-opacity-80 bg-slate-800 rounded-lg text-white text-center">
          <div className="text-3xl">{metric.value}</div>
          <div className="mt-2">{metric.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
