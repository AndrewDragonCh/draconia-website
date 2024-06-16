import { useEffect, useState } from "react";
import ServerStatus from "../types/ServerStatus";

export default function useServerStatus() {
  const [serverStatus, setServerStatus] = useState<ServerStatus | null>(null);

  useEffect(() => {
    const fetchServerStatus = async () => {
      const response = await fetch('https://api.mcsrvstat.us/3/join.draconia.world');
      const data = await response.json();
      const expiry = new Date(data.debug.cacheexpire* 1000);
      // Store data and expiry in session storage
      sessionStorage.setItem('serverStatus', JSON.stringify(data));
      sessionStorage.setItem('expiryTime', expiry.toISOString());
      setServerStatus(data);
    };

    const checkAndFetchServerStatus = () => {
      const now = new Date();
      const storedExpiryTime = sessionStorage.getItem('expiryTime');
      const parsedExpiryTime = storedExpiryTime ? new Date(storedExpiryTime) : null;
      if (!parsedExpiryTime || now > parsedExpiryTime) {
        fetchServerStatus();
      } else {
        // Use stored data if not expired
        const storedData = sessionStorage.getItem('serverStatus');
        if (storedData) setServerStatus(JSON.parse(storedData));
      }
    };

    // Initial fetch or load from session storage
    checkAndFetchServerStatus();

    // Set up an interval to check and fetch as needed, independent of expiryTime state
    const interval = setInterval(() => {
      checkAndFetchServerStatus();
    }, 10000); // Check every 10 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []); // Removed expiryTime from dependency array

  return serverStatus;
}