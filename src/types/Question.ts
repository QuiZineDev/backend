import { Labelisable } from "./Labelisable";
export interface Question extends Labelisable {
  name: string;
  id_answer: number;
  grade?: number;
  picture?: Uint8Array | null;
  duration?: number;
  id_creator?: number;
  private: boolean;
}