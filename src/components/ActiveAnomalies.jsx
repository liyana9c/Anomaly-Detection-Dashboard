// src/components/ActiveAnomalies.jsx
import React, { useEffect } from 'react';

const ActiveAnomalies = ({ anomalies }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const scrollElement = document.querySelector('.anomalies-scroll');
      if (scrollElement) {
        scrollElement.scrollTop += 2;
        if (scrollElement.scrollTop + scrollElement.clientHeight >= scrollElement.scrollHeight) {
          scrollElement.scrollTop = 0;
        }
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 rounded-lg bg-opacity-80 bg-slate-800 text-white overflow-hidden h-[300px] mt-2">
      <div className="text-2xl mb-3 bold ">Active Anomalies</div>
      <div className="anomalies-scroll h-full overflow-hidden ">
        <table className="w-full text-sm border ">
          <thead className='bg-opacity-80 bg-slate-700'>
            <tr className='border'>
              <th className="p-2 border">Timestamp</th>
              <th className="p-2 border">Source</th>
              <th className="p-2 border">Severity</th>
              <th className="p-2 border">Description</th>
             
            </tr>
          </thead>
          <tbody>
            {anomalies.map((anomaly, index) => (
              <tr key={index} className="bg-gray-800">
                <td className="p-2 border">{anomaly.timestamp}</td>
                <td className="p-2 border">{anomaly.source}</td>
                <td className={`p-2 border ${anomaly.severity.toLowerCase()}`}>{anomaly.severity}</td>
                <td className="p-2 border">{anomaly.description}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveAnomalies;
