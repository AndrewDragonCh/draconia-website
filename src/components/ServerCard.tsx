import { useState } from 'react';
import useServerStatus from "../hooks/useServerStatus";
import { trackEvent } from '../App';

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
          onClick={() => {
            copyToClipboard("join.draconia.world");
          }}
          className="cursor-pointer relative text-center w-full p-3 border-2 shadow-lg rounded-3xl plausible-event-name=Copied+IP"
          onMouseDown={() => {
            trackEvent('Copied IP');
          }}
        >
          <div id='IP' className="text-center mb-2 xl:text-2xl md:text-xl text-base text-white">
            Coming Eventually!
          </div>
          <div id='Players Online' className="relative w-full bg-gray-500 rounded-full xl:h-12 md:h-10 h-7 overflow-hidden xl:mt-4 xl:mb-2 md:mt-2 md:mb-1 mt-1 mb-0.5">
            {serverStatus ? (
              serverStatus.online === false ? (
                <span className="relative xl:text-lg md:text-base text-xs text-white whitespace-nowrap xl:-bottom-[.5rem] md:-bottom-[.4rem]">
                  Server is offline!
                </span>
              ) : serverStatus.players ? (
                <>
                  <span className="relative xl:text-lg md:text-base text-xs text-white whitespace-nowrap xl:-bottom-[.5rem] md:-bottom-[.4rem]">
                    {serverStatus.players.online} / {serverStatus.players.max} players online
                  </span>
                  <div
                    className="bg-gray-900 h-6 rounded-full"
                    style={{ width: `${(serverStatus.players.online / serverStatus.players.max) * 100}%` }}
                  ></div>
                </>
              ) : (
                <span className="relative xl:text-lg md:text-base text-xs text-white whitespace-nowrap xl:-bottom-[.5rem] md:-bottom-[.4rem]">Loading...</span>
              )
            ) : (
              <span className="relative xl:text-lg md:text-base text-xs text-white whitespace-nowrap xl:-bottom-[.5rem] md:-bottom-[.4rem]">Error loading Status!</span>
            )}
          </div>
          <div id='Copy Button' className="absolute xl:-bottom-4 md:-bottom-[14px] -bottom-3 right-6 z-10 p-1 bg-white text-black rounded-md xl:text-sm md:text-xs text-[.5rem] shadow-inner" >
            {copySuccess}
          </div>
        </div>
    </div>
  );
}

export default ServerCard;