import { supabase } from '../supabaseClient';

import { FriendRequest } from '../types/core/FriendRequest';

export	{ FriendRequest };

export async function createFriendRequest(id_requestor: number, id_validator: number): Promise<FriendRequest | null> {
  const { data, error } = await supabase
    .from('friend_requests')
    .insert([
      { id_requestor, id_validator }
    ]);

  if (error) return null;
  return data as FriendRequest;
}

export async function deleteFriendRequest(id_requestor: number, id_validator: number): Promise<FriendRequest | null> {
  const { data, error } = await supabase
    .from('friend_requests')
    .delete()
    .eq('id_requestor', id_requestor)
    .eq('id_validator', id_validator);

  if (error) return null;
  return data as FriendRequest;
}

export async function findFriendRequest(id: number): Promise<FriendRequest[] | null> {
  const { data, error } = await supabase
    .from('friend_requests')
    .select('*')
    .eq('id_requestor', id);

  if (error) return null;
  return data as FriendRequest[];
}

export async function didIAsked(id_requestor: number, id_validator: number): Promise<FriendRequest[] | null> {
  const { data, error } = await supabase
  .from('friend_requests')
  .select('*')
  .or(
    `and(id_requestor.eq.${id_requestor},id_validator.eq.${id_validator}),and(id_requestor.eq.${id_validator},id_validator.eq.${id_requestor})`
  );

  if (error) return null;
  return data as FriendRequest[];
}