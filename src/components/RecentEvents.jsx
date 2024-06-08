// src/components/RecentEvents.jsx
import React, { useEffect } from 'react';

const RecentEvents = ({ events }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const scrollElement = document.querySelector('.recent-events-scroll');
      if (scrollElement) {
        scrollElement.scrollTop += 7;
        if (scrollElement.scrollTop + scrollElement.clientHeight >= scrollElement.scrollHeight) {
          scrollElement.scrollTop = 0;
        }
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4bg-opacity-80 bg-slate-800 mt-2 rounded-lg bg-opacity-80 text-white overflow-hidden h-[300px]">
      <div className="text-xl mb-2">Recent Events</div>
      <div className="recent-events-scroll h-full overflow-hidden">
        {events.map((event, index) => (
          <div key={index} className="event-entry my-2 p-2 bg-opacity-80 bg-gray-700 rounded flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-sm">{event.timestamp}</div>
              <div className={`event-type ${event.type.toLowerCase()} text-sm font-bold`}>{event.type}</div>
            </div>
            <div className="text-sm">{event.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentEvents;