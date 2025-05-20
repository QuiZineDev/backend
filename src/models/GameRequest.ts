import { supabase } from '../supabaseClient';

import { GameRequest } from '../types/core/GameRequest';

export	{ GameRequest };

export async function createGameRequest(id_session: number, id_requestor: number, id_validator: number): Promise<GameRequest | null> {
  const { data, error } = await supabase
    .from('game_requests')
    .insert([
      { id_session, id_requestor, id_validator }
    ]);

  if (error) return null;
  return data as GameRequest;
}

export async function findGameRequestAsRequestor(id: number): Promise<GameRequest[] | null> {
  const { data, error } = await supabase
    .from('game_requests')
    .select('*')
    .eq('id_requestor', id);

  if (error) return null;
  return data as GameRequest[];
}

export async function findGameRequestAsValidator(id: number): Promise<GameRequest[] | null> {
  const { data, error } = await supabase
    .from('game_requests')
    .select('*')
    .eq('id_Validator', id);

  if (error) return null;
  return data as GameRequest[];
}

export async function deleteGameRequest(id: number): Promise<GameRequest | null> {
  const { data, error } = await supabase
    .from('game_requests')
    .delete()
    .eq('id', id);

  if (error) return null;
  return data as GameRequest;
}