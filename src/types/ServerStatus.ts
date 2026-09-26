export default interface ServerStatus {
  ping?: number;
  favicon?: string;
  description? : string;
  players?: {
    max: number;
    online: number;
    sample: [any];
  }
  version?: {
    name: string;
    protocol: number;
  }
  online: boolean
}