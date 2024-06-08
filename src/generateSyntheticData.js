export const generateSyntheticData = () => {
  const generateRandomData = (length, max) => Array.from({ length }, () => Math.floor(Math.random() * max));

  const currentHour = new Date().getHours();
  const timeLabels = Array.from({ length: 10 }, (_, i) => {
    const minutes = (currentHour * 60 + i * 6) % 60;
    const hour = Math.floor((currentHour * 60 + i * 6) / 60) % 24;
    return `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  });

  const spaceAnomalyTypes = ['Point Source Anomaly', 'Cosmic Ray Hit', 'High Energy Particle Event', 'Solar Flare Impact'];

  return {
    healthStatus: 'Normal',
    metrics: [
      { label: 'Active Connections', value: Math.floor(Math.random() * 500) },
      { label: 'Packet Loss Percentage', value: (Math.random() * 10).toFixed(2) + '%' },
      { label: 'Average Response Time', value: (Math.random() * 200).toFixed(2) + 'ms' },
      { label: 'Anomaly Detection Rate', value: (Math.random() * 100).toFixed(2) + '%' },
    ],
    anomalies: [
      { timestamp: '2024-06-07 10:25:12', source: 'IP: 10.0.0.1', severity: 'High', description: 'High volume of data packets from unknown source' },
      { timestamp: '2024-06-07 10:30:15', source: 'Network Segment C', severity: 'Medium', description: 'Unusual traffic pattern detected' },
      // Add more synthetic anomalies here
      {
        timestamp: "2024-06-07 10:26:16",
        type: "Anomaly Detected",
        description: "Disk Space Running Low",
        source: "S3",
        severity: "Medium",
        action: "Not specified"  // Action is missing from original data, so set to "Not specified"
      },
      { timestamp: '2024-06-07 10:25:12', source: 'IP: 10.0.0.1', severity: 'High', description: 'High volume of data packets from unknown source' },
      { timestamp: '2024-06-07 10:30:15', source: 'Network Segment C', severity: 'Medium', description: 'Unusual traffic pattern detected' },
      {
        timestamp: "2024-06-07 10:35:47",
        source: "Sensor Alpha (Mars Rover)",
        severity: "Low",
        "description": "Unexpected temperature fluctuation detected"
      },
      {
        timestamp: "2024-06-07 10:40:22",
        source: "Communication Relay Satellite (GEO-3)",
        severity: "Medium",
        "description": "Signal strength dropped momentarily"
      },
      {
        timestamp: "2024-06-07 10:45:00",
        source: "Deep Space Telescope Array",
        severity: "High",
        "description": "Cosmic ray event triggered unexpected data spike"
      },
      {
        timestamp: "2024-06-07 10:49:38",
        source: "Lunar Lander Module 1 (Landing Zone X)",
        severity: "Low",
        "description": "Solar panel output below expected levels"
      },
      {
        timestamp: "2024-06-07 11:00:14",
        source: "Space Station Gateway",
        severity: "Medium",
        "description": "Increased latency in communication channels"
      },
      {
        timestamp: "2024-06-07 11:05:42",
        source: "Deep Space Probe (Voyager 2)",
        severity: "Low",
        "description": "Telemetry data transmission error detected"
      },
      {
        timestamp: "2024-06-07 11:10:29",
        source: "Planetary Defense System (Ground Station)",
        severity: "High",
        "description": "Possible near-Earth object (NEO) detection requires confirmation"
      },
      {
        timestamp: "2024-06-07 11:15:07",
        source: "Mars Atmospheric Research Satellite",
        severity: "Medium",
        "description": "Unexpected atmospheric pressure readings recorded"
      },
      {
        timestamp: "2024-06-07 11:20:33",
        source: "Space Debris Tracking System",
        severity: "Low",
        "description": "Increased number of debris objects detected in geosynchronous orbit"
      },
      {
        timestamp: "2024-06-07 11:25:01",
        source: "International Space Station (Docking Port 2)",
        severity: "Medium",
        "description": "Pressure fluctuation detected in airlock module"
      },
      {
        timestamp: "2024-06-07 11:30:40",
        source: "Jupiter Exploration Probe",
        severity: "Low",
        "description": "Unexpected readings from magnetometer instrument"
      },
      {
        timestamp: "2024-06-07 11:35:18",
        source: "Lunar Lander Module 2 (Landing Zone Y)",
        severity: "High",
        "description": "Critical system malfunction detected, immediate action required"
      },
      {
        timestamp: "2024-06-07 11:40:04",
        source: "Communication Relay Satellite (MEO-1)",
        severity: "Medium",
        "description": "Communication link temporarily lost with ground station"
      },
      {
        timestamp: "2024-06-07 11:44:42",
        source: "Space Weather Monitoring Satellite",
        severity: "Low",
        "description": "Solar flare activity detected, potential for signal interference"
      },
   
    ],
    events: [
      { timestamp: '2024-06-07 10:25:12', type: 'Anomaly Detected', description: 'High volume of data packets from unknown source' },
      { timestamp: '2024-06-07 10:30:15', type: 'Network Response', description: 'Segment B isolated in response to anomaly' },
      { timestamp: '2024-06-07 10:35:20', type: 'User Login', description: 'User John logged in from workstation WS-123' },
        {
          timestamp: "2024-06-07 10:40:00",  // Added a new, recent event
          type: "Anomaly Detected",
          description: "Unauthorized access attempt detected on port 80",
          "source": "IP: 172.20.0.10",
          "severity": "Medium",
          "action": "IP address blocked"
        },
        {
          timestamp: "2024-06-07 10:45:32",  // Added another new, recent event
          type: "Process Restarted",
          description: "Critical system process (httpd) restarted due to high CPU usage",
          "source": "Server S1",
          "action": "Automatically restarted by monitoring agent"
        },
        {
          timestamp: "2024-06-07 10:25:12",  // Existing event from previous data
          type: "Anomaly Detected",
          description: "High volume of data packets from unknown source",
          "source": "Network Segment X",  // Added source for clarity
          "severity": "High",
          "action": "Network segment isolated"  // Assuming action was taken
        },
        {
          timestamp: "2024-06-07 10:30:15",  // Existing event from previous data
          type: "Network Response",
          description: "Segment B isolated in response to anomaly",
          "target": "Network Segment B"  // Added target for clarity
        },
        {
          timestamp: "2024-06-07 10:35:20",  // Existing event from previous data
          type: "User Login",
          description: "User John logged in from workstation WS-123"
        },
        { timestamp: '2024-06-07 10:25:12', type: 'Anomaly Detected', description: 'High volume of data packets from unknown source' },
      { timestamp: '2024-06-07 10:30:15', type: 'Network Response', description: 'Segment B isolated in response to anomaly' },
      { timestamp: '2024-06-07 10:35:20', type: 'User Login', description: 'User John logged in from workstation WS-123' },
        {
          timestamp: "2024-06-07 10:40:00",  // Added a new, recent event
          type: "Anomaly Detected",
          description: "Unauthorized access attempt detected on port 80",
          "source": "IP: 172.20.0.10",
          "severity": "Medium",
          "action": "IP address blocked"
        },
        {
          timestamp: "2024-06-07 10:45:32",  // Added another new, recent event
          type: "Process Restarted",
          description: "Critical system process (httpd) restarted due to high CPU usage",
          "source": "Server S1",
          "action": "Automatically restarted by monitoring agent"
        },
        {
          timestamp: "2024-06-07 10:25:12",  // Existing event from previous data
          type: "Anomaly Detected",
          description: "High volume of data packets from unknown source",
          "source": "Network Segment X",  // Added source for clarity
          "severity": "High",
          "action": "Network segment isolated"  // Assuming action was taken
        },
        {
          timestamp: "2024-06-07 10:30:15",  // Existing event from previous data
          type: "Network Response",
          description: "Segment B isolated in response to anomaly",
          "target": "Network Segment B"  // Added target for clarity
        },
        {
          timestamp: "2024-06-07 10:35:20",  // Existing event from previous data
          type: "User Login",
          description: "User John logged in from workstation WS-123"
        },
        { timestamp: '2024-06-07 10:25:12', type: 'Anomaly Detected', description: 'High volume of data packets from unknown source' },
        { timestamp: '2024-06-07 10:30:15', type: 'Network Response', description: 'Segment B isolated in response to anomaly' },
        { timestamp: '2024-06-07 10:35:20', type: 'User Login', description: 'User John logged in from workstation WS-123' },
          {
            timestamp: "2024-06-07 10:40:00",  // Added a new, recent event
            type: "Anomaly Detected",
            description: "Unauthorized access attempt detected on port 80",
            "source": "IP: 172.20.0.10",
            "severity": "Medium",
            "action": "IP address blocked"
          },
          {
            timestamp: "2024-06-07 10:45:32",  // Added another new, recent event
            type: "Process Restarted",
            description: "Critical system process (httpd) restarted due to high CPU usage",
            "source": "Server S1",
            "action": "Automatically restarted by monitoring agent"
          },
          {
            timestamp: "2024-06-07 10:25:12",  // Existing event from previous data
            type: "Anomaly Detected",
            description: "High volume of data packets from unknown source",
            "source": "Network Segment X",  // Added source for clarity
            "severity": "High",
            "action": "Network segment isolated"  // Assuming action was taken
          },
          {
            timestamp: "2024-06-07 10:30:15",  // Existing event from previous data
            type: "Network Response",
            description: "Segment B isolated in response to anomaly",
            "target": "Network Segment B"  // Added target for clarity
          },
          {
            timestamp: "2024-06-07 10:35:20",  // Existing event from previous data
            type: "User Login",
            description: "User John logged in from workstation WS-123"
          }
      ]
    ,
    realTimeData: {
      labels: ['10:00', '10:10', '10:20', '10:30', '10:40', '10:50', '11:00'],
      datasets: [
        {
          label: 'Network Traffic',
          data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 100)),
          borderColor: '#FB3DB7',
          backgroundColor: '#FB3DB7',
        },
      ],
    },
    accuracyData: {
      labels: timeLabels,
      datasets: [
        {
          label: 'Accuracy',
          data: generateRandomData(10, 100),
          borderColor: '#6a2fca',
          backgroundColor: '#6a2fca',
          fill: true,
        },
      ],
    },
    falsePositiveData: {
      labels: timeLabels,
      datasets: [
        {
          label: 'False Positives',
          data: generateRandomData(10, 50),
          borderColor: '#cf188d',
          backgroundColor: '#cf188d',
          fill: true,
        },
      ],
    },
    responseTimeData: {
      labels: timeLabels,
      datasets: [
        {
          label: 'Response Time',
          data: generateRandomData(10, 500),
          borderColor: '#6969c8',
          backgroundColor: '#6969c8',
          fill: true,
        },
      ],
    },
    anomalyTypeData: {
      labels: ['Unusual Traffic', 'Unauthorized Access', 'High CPU Usage','Disk Space Running Low', 'Other'],
      datasets: [
        {
          data: [15, 25, 20, 10, 30],
          backgroundColor: ['#e233a3', '#cd08cd', '#a112e2', '#6845bd', 'rgba(153,102,255,1)'],
          hoverBackgroundColor: [
            '#9d006e', // Much darker shade of #e233a3
            '#800080', // Dark purple shade of #cd08cd
            '#5d009c', // Deep indigo shade of #a112e2
            '#332270', // Dark navy blue shade of #6845bd
            'rgba(77, 41, 130, 1)', // Darker shade of rgba(153,102,255,1)
          ],
        },
      ],
    },

  };
};

export default generateSyntheticData;
