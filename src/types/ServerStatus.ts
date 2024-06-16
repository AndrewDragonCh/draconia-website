export default interface ServerStatus {
  ip: string;
  port: number;
  debug: {
    ping: boolean;
    query: boolean;
    srv: boolean;
    querymismatch: boolean;
    ipinsrv: boolean;
    cnameinsrv: boolean;
    animatedmotd: boolean;
    cachehit: boolean;
    cachetime: number;
    cacheexpire: number;
    apiversion: number;
    error?: {
      ping: string;
      query: string;
    }
  };
  motd?: {
    raw: string[];
    clean: string[];
    html: string[];
  };
  players?: {
    online: number;
    max: number;
    list: {
      name: string;
      uuid: string;
    }[];
  };
  version?: string;
  online: boolean;
  protocol?: {
    version: number;
    name: string;
  };
  hostname: string;
  software?: string;
  map?: {
    raw: string;
    clean: string;
    html: string;
  };
  plugins?: {
    name: string;
    version: string;
  }[];
  mods?: {
    name: string;
    version: string;
  }[];
  info?: {
    raw: string[];
    clean: string[];
    html: string[];
  };
  icon?: string;
  eula_blocked?: boolean;
}