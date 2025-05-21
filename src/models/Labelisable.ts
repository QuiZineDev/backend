import { supabase } from '../supabaseClient';
import { Labelisable } from '../types/core/Labelisable'

export	{ Labelisable };

export async function createLabelisable(): Promise<Labelisable | null> {

  const { data, error } = await supabase
    .from('labelisable')
    .insert({})
    .select('*')
    .single();
  

  if (error) return null;
  return data as Labelisable;
}