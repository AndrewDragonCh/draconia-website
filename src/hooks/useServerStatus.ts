import { useEffect, useState } from "react";
import ServerStatus from "../types/ServerStatus";

export default function useServerStatus() {
  const [serverStatus, setServerStatus] = useState<ServerStatus | null>(null);

  useEffect(() => {
    const fetchServerStatus = async () => {
      const response = await fetch('https://api.dragonaere.net/join.draconia.world');
      const data = await response.json();
      setServerStatus(data);
    };
  
    fetchServerStatus();
    
    const interval = setInterval(() => {
      fetchServerStatus();
    }, 10000);

    return () => clearInterval(interval);
  }, []) ;

  return serverStatus;
}