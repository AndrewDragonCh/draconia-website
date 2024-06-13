import { useEffect, useState } from "react";
import { ServerStatus } from "../../Types";

export function useServerStatus() {
  const [serverStatus, setServerStatus] = useState<ServerStatus | null>(null);

  useEffect(() => {
    const fetchServerStatus = async () => {
      const response = await fetch('https://api.mcsrvstat.us/3/join.draconia.world');
      const data = await response.json();
      setServerStatus(data);
    };

    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return serverStatus;
}