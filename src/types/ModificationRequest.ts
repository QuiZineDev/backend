  interface ModificationRequest {
    id_requestor: number;
    id_creator: number;
    id_question: number;
    message: string;
    status: boolean;
  }