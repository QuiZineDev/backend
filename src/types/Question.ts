  interface Question {
    id: number;
    name: string;
    id_answer: number;
    grade?: number;
    picture?: Uint8Array;
    duration?: number;
    id_creator?: number;
    private: boolean;
  }