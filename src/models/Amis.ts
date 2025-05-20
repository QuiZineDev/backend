import { supabase } from '../supabaseClient';

import { Amis } from '../types/core/Amis';

export	{ Amis };

export async function findAmisById(id: number): Promise<Amis[] | null> {
  const { data, error } = await supabase
    .from('amis')
    .select('*')
    .eq('id_requestor', id);

  if (error) return null;
  return data as Amis[];
}

export async function findSpecificAmisById(id_requestor: number, id_validator): Promise<Amis | null> {
  const { data, error } = await supabase
    .from('amis')
    .select('*')
    .eq('id_requestor', id_requestor)
    .eq('id_validator', id_validator)
    .single();

  if (error) return null;
  return data as Amis;
}

export async function linkWithSomeone( id_requestor: number, id_validator: number){
    const { data, error } = await supabase
        .from('amis')
        .insert([
        { id_requestor, id_validator },
        { id_validator, id_requestor }
        ]);
    
    if (error) return null;
    return data as Amis[];
}