import { useState } from 'react';
import { useServerStatus } from "../hooks/useServerStatus";

function ServerCard() {
  const serverStatus = useServerStatus();
  
  const [copySuccess, setCopySuccess] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

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
    <div>
      {serverStatus ? (
        <div
          onClick={() => copyToClipboard("play.draconia.world")}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="cursor-pointer relative"
        >
          <div>
            play.draconia.world
            {showTooltip && (
              <div className="absolute top-[-5%] left-[19%] -translate-x-1/2 mb-2 p-1 bg-black text-white rounded-md text-xs whitespace-nowrap" >
                Click to copy
              </div>
            )}
          </div>
          {copySuccess && <p>{copySuccess}</p>}
          <p>
            {serverStatus.players.online} / {serverStatus.players.max} players online
          </p>
          <div dangerouslySetInnerHTML={{ __html: serverStatus.motd.html }} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ServerCard;