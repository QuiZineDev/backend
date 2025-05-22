import { ChoiceTODO } from './choiceTODO';
export interface QuestionTODO {
  name: string;
  grade?: number;
  picture?: Uint8Array | null;
  duration?: number;
  id_creator?: number;
  private: boolean;
  choices: ChoiceTODO[];
  tags?: string[];
}