import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4  flex justify-between items-center">
      <h1 className="text-3xl">Anomaly Detection In Space Networks</h1>
      <nav>
        <ul className="flex text-xl align-between gap-10">
          <li><a href="#overview">Overview</a></li>
          <li><a href="#monitoring">Monitoring</a></li>
          <li><a href="#anomalies">Anomalies</a></li>
        </ul>
      </nav>
      <div className='text-xl'>Last Update: <span className="text-green-400">Just now</span></div>
    </header>
  );
};

export default Header;

