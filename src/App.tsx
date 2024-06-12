import { useEffect, useState } from "react";
import { getServerStatus } from "./lib/getServerStatus";

function App() {
  const [serverStatus, setServerStatus] = useState(null); // Initial state is null to indicate loading

  // Get server status on mount and refresh the data every minute
  useEffect(() => {
    // Define a function to fetch the server status and update the state
    const fetchServerStatus = () => {
      getServerStatus()
        .then(response => response.json())
        .then(data => setServerStatus(data))
        .catch(error => console.error('Error fetching server status:', error));
    };

    fetchServerStatus(); // Run immediately on mount

    const intervalId = setInterval(fetchServerStatus, 60000); // Fetch every minute to keep the data up to date

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <main>
      {serverStatus ? (
        <div>
          <h1>Server Status</h1>
          <pre>{JSON.stringify(serverStatus, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading server status...</p>
      )}
    </main>
  );
}

export default App;