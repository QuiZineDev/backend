// src/models/User.ts
import { supabase } from '../supabaseClient';

import { User } from '../types/core/User';
import { Participation } from '../types/core/Participation';
import { QuizWithQuestionsWithChoices } from '../types/PopulatedTypes';
import { findQuizById } from './Quiz';

export { User }
// Find user by username
export async function findUserByUsername(username: string): Promise<User | null> {
  const { data, error } = await supabase
    .from('user')
    .select('*')
    .ilike('username', `%${username}%`)
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

export async function getHistory(id: number): Promise<Participation[] | null> {
  const { data, error } = await supabase
    .from('participation')
    .select('*')
    .eq('id_user', id)
    .order('datetime', { ascending: false });
  if (error) return null;
  return data as Participation[];
}

export async function getRecentHistory(id_user: number): Promise<Participation[] | null> {
  const { data, error } = await supabase
    .from('participation')
    .select('*')
    .eq('id_user', id_user)
    .order('datetime', { ascending: false })
    .limit(4);
  if (error) return null;
  return data as Participation[];
}

export async function getRecentQuizes(user: User): Promise<QuizWithQuestionsWithChoices[] | null> {
  await getRecentHistory(user.id).then(async (participations) => {
    if (participations) {
      const quizzes: QuizWithQuestionsWithChoices[] = [];
      for (const participation of participations) {
        const session = await supabase
          .from('session')
          .select('*')
          .eq('id', participation.id_session)
          .single();
        if (session.error) return null;
        const quiz = await findQuizById(session.data.id_quiz, user);
        if (quiz) {
          quizzes.push(quiz);
        }
      }
      return quizzes;
    }
    return null;
  });
  return null;
}