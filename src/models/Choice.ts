import { supabase } from '../supabaseClient';

import { Choice } from '../types/core/Choice';

export	{ Choice };

export async function findChoiceById(id: number): Promise<Choice | null> {
  const { data, error } = await supabase
    .from('choice')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return null;
  return data as Choice;
}

export async function findChoicesByQuestionId(id_question: number): Promise<Choice[]> {
  const { data, error } = await supabase
    .from('choice')
    .select('*')
    .eq('id_question', id_question);

  if (error) return null;
  return data as Choice[];
}


export async function createChoice(content: string, id_question: number): Promise<Choice | null> {
  const newChoice = {
    content,
    id_question
  };
    if(content == null || content == undefined){
      return null;
    }
  const { data, error } = await supabase
    .from('choice')
    .insert(newChoice)
    .select('*')
    .single();

    

  if (error) return null;
  return data as Choice;
}

