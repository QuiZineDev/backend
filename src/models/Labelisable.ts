import { supabase } from '../supabaseClient';
import { Labelisable } from '../types/core/Labelisable'

export	{ Labelisable };

export async function createLabelisable(): Promise<Labelisable | null> {
  console.log("Creating labelisable");

  const { data, error } = await supabase
    .from('labelisable')
    .insert({})
    .select('*')
    .single();
  
  console.log("Created labelisable");

  if (error) return null;
  return data as Labelisable;
}