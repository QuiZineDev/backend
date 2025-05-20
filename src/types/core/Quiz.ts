import { Labelisable } from "./Labelisable";
export interface Quiz extends Labelisable {
  nom: string;
  picture: Uint8Array | null;
  private: boolean;
  id_creator?: number;
}