import { useState } from 'react';
import { useServerStatus } from "../hooks/useServerStatus";

function ServerCard({ className }: { className: string }) {
  const serverStatus = useServerStatus();
  
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000); // Hide the message after 2 seconds
    } catch (err) {
      setCopySuccess('Failed to copy');
    }
  };

  return (
    <div id='Server Status Card' className={`flex flex-col items-center justify-center ${className}`}>
      {serverStatus ? (
        <div
          onClick={() => copyToClipboard("play.draconia.world")}
          className="cursor-pointer relative text-center w-full p-3 border rounded-3xl"
        >
          <div id='IP' className="text-center mb-2">
            play.draconia.world
          </div>
          <div id='Players Online' className="relative w-full bg-gray-200 rounded-full h-6 dark:bg-gray-700 overflow-hidden mt-2 mb-1">
            <div
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-xs text-white whitespace-nowrap">
                {serverStatus.players.online} / {serverStatus.players.max} players online
              </span>
            </div>
            <div
              className="bg-blue-600 h-6 rounded-full"
              style={{ width: `${(serverStatus.players.online / serverStatus.players.max) * 100}%` }}
            ></div>
          </div>
          <div id='Copy Button' className="absolute right-4 p-1 bg-black text-white rounded-md text-xs whitespace-nowrap" >
            {copySuccess || "Click to copy"}
          </div>
        </div>
        
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
  );
}

export default ServerCard;