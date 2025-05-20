import { supabase } from '../supabaseClient';

import { Grade } from '../types/core/Grade';

export	{ Grade };

export async function createGrade(id_creator: number, id_labelisable: number, grade: number): Promise<Grade | null> {
  const newGrade = {
    id_creator,
    id_labelisable,
    grade
  };

  const { data, error } = await supabase
    .from('grade')
    .insert(newGrade)
    .select('*')
    .single();

  if (error) return null;
  return data as Grade;
}