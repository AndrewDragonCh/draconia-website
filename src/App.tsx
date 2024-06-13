import { useEffect, useState } from "react";
import { getServerStatus } from "./lib/getServerStatus";

import type { ServerStatus } from "../Types";

function App() {
  const [serverStatus, setServerStatus] = useState<ServerStatus | null>(null);

  useEffect(() => {
    const fetchServerStatus = async () => {
      const response = await getServerStatus();
      const data = await response.json();
      setServerStatus(data);
    };

    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <main>
      <h1>Server Status</h1>
      {serverStatus ? (
        <div>
          <h2>{serverStatus.hostname}</h2>
          <p>
            {serverStatus.players.online} / {serverStatus.players.max} players
            online
          </p>
          <p>Version: {serverStatus.version}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}

export default App;