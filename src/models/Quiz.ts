// src/models/User.ts
import { supabase } from '../supabaseClient';

import { Quiz } from '../types/core/Quiz';

export	{ Quiz };

export async function findQuizById(id: number): Promise<Quiz | null> {
  const { data, error } = await supabase
    .from('quiz')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return null;
  return data as Quiz;
}

export async function findQuizzesByName(name: string): Promise<Quiz[]> {
  const { data, error } = await supabase
    .from('quiz')
    .select('*')
    .ilike('nom', `%${name}%`);

    if (error) return null;
    return data as Quiz[];
}

export async function findQuizzesByCreator(creatorId: number): Promise<Quiz[]> {
  const { data, error } = await supabase
    .from('quiz')
    .select('*')
    .eq('id_creator', creatorId);

  if (error) return null;
  return data as Quiz[];
}

export async function createQuiz(nom: string, picture: (Uint8Array | null), isprivate: boolean, id_creator: number): Promise<Quiz | null> {
  const newQuiz = {
    nom,
    picture,
    private: isprivate,
    id_creator
    };
  
    const { data, error } = await supabase
    .from('quiz')
    .insert(newQuiz)
    .select('*')
    .single();

  if (error) return null;
  return data as Quiz;
}