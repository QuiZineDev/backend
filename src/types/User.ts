export interface User {
  id: number;
  username: string;
  password: string;
  picture: Uint8Array | null;
  admin: boolean;
}