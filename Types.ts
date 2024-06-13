export type ServerStatus = {
  motd: {
    raw: string[];
    clean: string[];
    html: string[];
  };
  players: {
    online: number;
    max: number;
  };
  version: string;
  online: boolean;
  protocol: {
    version: number;
  };
  hostname: string;
  eula_blocked: boolean;
};