import { supabase } from '../supabaseClient';

import { Session } from '../types/core/Session';

export	{ Session };

export async function findSessionById(id: number): Promise<Session | null> {
  const { data, error } = await supabase
    .from('session')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return null;
  return data as Session;
}

export async function findSessionsByQuizId(id_quiz: number): Promise<Session[]> {
  const { data, error } = await supabase
    .from('session')
    .select('*')
    .eq('id_quiz', id_quiz);

  if (error) return null;
  return data as Session[];
}

export async function createSession(id_quiz: number, id_creator: number): Promise<Session | null> {
  const newSession = {
    id_quiz
  };
  //,id_creator
  const { data, error } = await supabase
    .from('session')
    .insert(newSession)
    .select('*')
    .single();

  if (error){

    console.log("error create session : ", error);
    return null;
  }
  return data as Session;
}

export async function deleteSession(id: number): Promise<Session | null> {
  const { data, error } = await supabase
    .from('session')
    .delete()
    .eq('id', id);

  if (error) return null;
  return data as Session;
}