  interface Quiz {
    id: number;
    nom: string;
    picture?: Uint8Array;
    private: boolean;
    id_creator?: number;
  }