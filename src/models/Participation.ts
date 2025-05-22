import { supabase } from '../supabaseClient';

import { Participation } from '../types/core/Participation';

export	{ Participation };

export async function findParticipationById(id: number): Promise<Participation | null> {
  const { data, error } = await supabase
    .from('participation')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return null;
  return data as Participation;
}

export async function findParticipationByIdSession(id_session: number): Promise<Participation[] | null> {
  const { data, error } = await supabase
    .from('participation')
    .select('*')
    .eq('id_session', id_session);

  if (error) return null;
  return data as Participation[];
}

export async function findParticipationByIdUser(id_user: number): Promise<Participation[] | null> {
  const { data, error } = await supabase
    .from('participation')
    .select('*')
    .eq('id_user', id_user);

  if (error) return null;
  return data as Participation[];
}

export async function createParticipation(id_session: number, id_user: number): Promise<Participation | null> {
  const { data, error } = await supabase
    .from('participation')
    .insert([
      { id_session, id_user }
    ])
    .select();

  if (error){
    console.log("erreur : ", error)
    return null;
  }
  console.log(data, error)
  return data[0] as Participation;
}

export async function deleteParticipation(id: number): Promise<Participation | null> {
  const { data, error } = await supabase
    .from('participation')
    .delete()
    .eq('id', id);

  if (error) return null;
  return data as Participation;
}

export async function deleteParticipationByIdSession(id_session: number): Promise<Participation[] | null> {
  const { data, error } = await supabase
    .from('participation')
    .delete()
    .eq('id_session', id_session);

  if (error) return null;
  return data as Participation[];
}

export async function addParticipation(id_session: number, id_user: number): Promise<Participation | null> {
  const { data, error } = await supabase
    .from('participation')
    .insert([
      { id_session, id_user, score : 0, date_time: new Date() }
    ]);

  if (error) return null;
  return data as Participation;
}

export async function setScore(id_participation: number, score: number): Promise<Participation | null> {
  const { data, error } = await supabase
    .from('participation')
    .update({ score })
    .eq('id', id_participation);

  if (error) return null;
  return data as Participation;
}

export async function setScoreBis(id_user: number, id_session: number, score: number): Promise<Participation | null> {
  const { data, error } = await supabase
    .from('participation')
    .update({ score })
    .eq('id_session', id_session)
    .eq('id_user', id_user);

  if (error) return null;
  return data as Participation;
}

export async function deleteNullParticipationsOfSession(id_session): Promise<Participation[] |null> {
  const { data, error } = await supabase
    .from('participation')
    .delete()
    .eq('score', null)
    .eq('id_session', id_session);

  if (error) return null;
  return data as Participation[];
}