import { QuestionTODO } from "./QuestionTODO";
export interface QuizTODO {
  nom: string;
  picture: Uint8Array | null;
  private: boolean;
  questions?: QuestionTODO[];
}