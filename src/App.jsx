import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import OverallNetworkHealth from './components/OverallNetworkHealth';
import Metrics from './components/Metrics';
import ActiveAnomalies from './components/ActiveAnomalies';
import RecentEvents from './components/RecentEvents';
import RealTimeMonitoring from './components/RealTimeMonitoring';
import SystemPerformance from './components/SystemPerformance';
import generateSyntheticData from './generateSyntheticData';

const App = () => {
  const [data, setData] = useState(generateSyntheticData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateSyntheticData());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900  text-white">
      <Header />
      <div className="grid grid-cols-3 gap-2 ">
        
        <div>
        <RecentEvents events={data.events} />
        <RealTimeMonitoring data={data.realTimeData} />
        </div>
        <div>
        <SystemPerformance
            accuracyData={data.accuracyData}
            falsePositiveData={data.falsePositiveData}
            responseTimeData={data.responseTimeData}
            anomalyTypeData={data.anomalyTypeData}
          />
           <Metrics metrics={data.metrics} />
        </div>
        <div>
        <ActiveAnomalies anomalies={data.anomalies} />
        <OverallNetworkHealth status={data.healthStatus} metrics={data.metrics} />
         
        </div>
      </div>
    </div>
  );
};

export default App;
