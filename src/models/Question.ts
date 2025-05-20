import { supabase } from '../supabaseClient';

import { Question } from '../types/core/Question';

export	{ Question };

export async function findQuestionById(id: number): Promise<Question | null> {
  const { data, error } = await supabase
    .from('question')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return null;
  return data as Question;
}

export async function createQuestion(name: string, id_answer: number, grade: number, picture: (Uint8Array | null), duration: number, id_creator: number, isprivate: boolean): Promise<Question | null> {
  const newQuestion = {
    name,
    id_answer,
    grade,
    picture,
    duration,
    id_creator,
    private: isprivate
  };

  const { data, error } = await supabase
    .from('question')
    .insert(newQuestion)
    .select('*')
    .single();

  if (error) return null;
  return data as Question;
}