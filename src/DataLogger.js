import React, { useState, useEffect } from "react";
import fs from "fs"; // Import the file system module

// Logger component
function Logger() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Function to log data at regular intervals
    const logData = () => {
      const timestamp = new Date().toISOString();
      const newData = Math.random() * 100; // Simulate some data
      const logEntry = { timestamp, data: newData };
      setLogs([...logs, logEntry]);
      // Write log entry to a file
      fs.appendFileSync("logs.txt", JSON.stringify(logEntry) + "\n");
    };

    const interval = setInterval(logData, 2000); // Log data every 2 seconds

    return () => {
      clearInterval(interval); // Cleanup on unmount
      // Optionally, you can close the file stream if necessary
      // fs.closeSync(fileStream);
    };
  }, [logs]); // Depend on logs state to trigger re-renders

  return (
    <div>
      <h2>Continuous Logger</h2>
      <div>
        <h3>Logs:</h3>
        <ul>
          {logs.map((log, index) => (
            <li key={index}>
              {log.timestamp}: {log.data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Logger;
