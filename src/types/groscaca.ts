interface User {
    id: number;
    username: string;
    password: string;
    picture?: Uint8Array; // BYTEA can be represented as Uint8Array
    admin: boolean;
  }
  
  interface Amis {
    id_requestor: number;
    id_validator: number;
  }
  
  interface GameRequest {
    datetime: Date;
    id_session: number;
    id_requestor: number;
    id_validator: number;
  }
  
  interface Session {
    id: number;
    id_quiz: number;
  }
  
  interface Quiz {
    id: number;
    nom: string;
    picture?: Uint8Array;
    private: boolean;
    id_creator?: number;
  }
  
  interface Labelisable {
    id: number;
  }
  
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
  
  interface Choice {
    id: number;
    content: string;
    id_question: number;
  }
  
  interface NnQuizQuestion {
    id_quiz: number;
    id_question: number;
  }
  
  interface Label {
    id: number;
    nom: string;
  }
  
  interface NnLabelLabelisable {
    id_label: number;
    id_labelisable: number;
  }
  
  interface Participation {
    id: number;
    id_session: number;
    id_user: number;
    datetime: Date;
    score?: number;
  }
  
  interface Answer {
    id: number;
    id_participation: number;
    id_question: number;
    id_decision: number;
    duration?: number;
  }
  
  interface FriendRequest {
    id_requestor: number;
    id_validator: number;
    datetime: Date;
  }
  
  interface ModificationRequest {
    id_requestor: number;
    id_creator: number;
    id_question: number;
    message: string;
    status: boolean;
  }
  
  interface Comment {
    id_creator: number;
    id_quiz: number;
    message: string;
    datetime: Date;
  }
  
  interface Grade {
    id_creator: number;
    id_labelisable: number;
    grade: number;
  }
  