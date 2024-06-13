export type ServerStatus = {
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
    dns: {
      error: {
        srv: {
          hostname: string;
          message: string;
        };
      };
      a: Array<{
        name: string;
        type: string;
        class: string;
        ttl: number;
        rdlength: number;
        rdata: string;
        cname?: string;
        address?: string;
      }>;
    };
    error: {
      query: string;
    };
  };
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