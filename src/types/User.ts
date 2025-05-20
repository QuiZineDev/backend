interface User {
    id: number;
    username: string;
    password: string;
    picture?: Uint8Array; // BYTEA can be represented as Uint8Array
    admin: boolean;
  }