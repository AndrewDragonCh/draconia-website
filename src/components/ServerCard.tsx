import { useState } from 'react';
import { useServerStatus } from "../hooks/useServerStatus";

function ServerCard({ width }: { width: string }) {
  const serverStatus = useServerStatus();

  const [copySuccess, setCopySuccess] = useState('Click to copy');

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess('Click to copy'), 2000); // Hide the message after 2 seconds
    } catch (err) {
      setCopySuccess('Failed to copy');
      setTimeout(() => setCopySuccess('Click to copy'), 2000);
    }
  };

  return (
    <div id='Server Status Card' className={`${width}`}>
        <div
          onClick={() => copyToClipboard("join.draconia.world")}
          className="cursor-pointer relative text-center w-full p-3 border-2 shadow-lg rounded-3xl"
        >
          <div id='IP' className="text-center mb-2 sm:text-xl text-base text-white">
            Coming Eventually!
          </div>
          <div id='Players Online' className="relative w-full bg-gray-500 rounded-full sm:h-10 h-7 overflow-hidden mt-2 mb-1">
            {serverStatus ? (
              serverStatus.online === false ? (
                <span className="relative sm:text-base text-xs text-white whitespace-nowrap sm:-bottom-[.4rem]">
                  Server is offline!
                </span>
              ) : serverStatus.players ? (
                <>
                  <span className="relative sm:text-base text-xs text-white whitespace-nowrap sm:-bottom-[.4rem]">
                    {serverStatus.players.online} / {serverStatus.players.max} players online
                  </span>
                  <div
                    className="bg-gray-900 h-6 rounded-full"
                    style={{ width: `${(serverStatus.players.online / serverStatus.players.max) * 100}%` }}
                  ></div>
                </>
              ) : (
                <span className="relative sm:text-base text-xs text-white whitespace-nowrap sm:-bottom-[.4rem]">Loading...</span>
              )
            ) : (
              <span className="relative sm:text-base text-xs text-white whitespace-nowrap sm:-bottom-[.4rem]">Loading...</span>
            )}
          </div>
          <div id='Copy Button' className="absolute -bottom-3 right-6 z-10 p-1 bg-white text-black rounded-md sm:text-xs text-[.5rem] shadow-inner" >
            {copySuccess}
          </div>
        </div>
    </div>
  );
}

export default ServerCard;