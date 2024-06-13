import { useServerStatus } from "./hooks/useServerStatus";

function App() {
  const serverStatus = useServerStatus();

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