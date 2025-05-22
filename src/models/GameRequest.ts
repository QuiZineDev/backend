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

export async function createListOfGamesResquests(id_session: number, id_requestor: number, id_validator: number[]): Promise<boolean[] | null> {
  const table_request: boolean[] = [];
  for (let i = 0; i < id_validator.length; i++) {
    const { data, error } = await supabase
      .from('game_request')
      .insert([
        { id_session, id_requestor, id_validator: id_validator[i] }
      ]);
      console.log(error)
    if (error) table_request.push(false);
    else table_request.push(true);
  }
  return table_request;
}

export async function findGameRequestAsRequestor(id: number): Promise<GameRequest[] | null> {
  const { data, error } = await supabase
    .from('game_requests')
    .select('*')
    .eq('id_requestor', id);

  if (error) return null;
  return data as GameRequest[];
}

export async function findGameRequestAsSession(id_session: number): Promise<GameRequest[] | null> {
  const { data, error } = await supabase
    .from('game_requests')
    .select('*')
    .eq('id_session', id_session);

  if (error) return null;
  return data as GameRequest[];
}

export async function findGameRequestAsValidator(id: number): Promise<GameRequest[] | null> {
  const { data, error } = await supabase
    .from('game_request')
    .select('*')
    .eq('id_Validator', id);
  console.log("data error", data, error)
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

export async function deleteGameRequestBis(id_session, id_validator): Promise<GameRequest | null> {
  const { data, error } = await supabase
    .from('game_requests')
    .delete()
    .eq('id_session', id_session)
    .eq('id_validator', id_validator);

  if (error) return null;
  return data as GameRequest;
}

export async function deleteAllGameRequests(id_session: number): Promise<GameRequest[] | null> {
  const { data, error } = await supabase
    .from('game_requests')
    .delete()
    .eq('id_session', id_session);

  if (error) return null;
  return data as GameRequest[];
}