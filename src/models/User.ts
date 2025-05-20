// src/models/User.ts
import { supabase } from '../supabaseClient';

import { User } from '../types/core/User';

export { User }
// Find user by username
export async function findUserByUsername(username: string): Promise<User | null> {
  const { data, error } = await supabase
    .from('user')
    .select('*')
    .eq('username', username)
    .single();

  if (error) return null;
  return data as User;
}

// Find user by id
export async function findUserById(id: number): Promise<User | null> {
  const { data, error } = await supabase
    .from('user')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return null;
  return data as User;
}

// Create new user (register)
export async function createUser(username: string, hashedPassword: string): Promise<User | null> {
  const { data, error } = await supabase
    .from('user')
    .insert([{ username, password: hashedPassword }])
    .select()
    .single();

  if (error) return null;
  return data as User;
}
