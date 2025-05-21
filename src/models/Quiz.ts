import { supabase } from '../supabaseClient';
import { findQuestionsByQuizId } from './Question';
import { Quiz } from '../types/core/Quiz';
import { User } from './User';
import { QuizWithQuestionsWithChoices } from '../types/PopulatedTypes';
import { createLabelisable } from './Labelisable';
export	{ Quiz };

export async function findQuizById(id: number, user:User): Promise<QuizWithQuestionsWithChoices | null> {
  const { data, error } = await supabase
    .from('quiz')
    .select('*')
    .eq('id', id)
    .or(`id_creator.eq.${user.id}, private.eq.false`)
    .single();

  if (error) return null;
  await findQuestionsByQuizId(id).then((questions) => {
    console.log(questions);
    data.questions = questions;
  });
  return data as QuizWithQuestionsWithChoices;
}

export async function findQuizzesByName(name: string): Promise<Quiz[]> {
  const { data, error } = await supabase
    .from('quiz')
    .select('*')
    .ilike('nom', `%${name}%`);

    if (error) return null;
    return data as Quiz[];
}

export async function findQuizzesByCreator(creatorId: number): Promise<Quiz[]> {
  const { data, error } = await supabase
    .from('quiz')
    .select('*')
    .eq('id_creator', creatorId);

  if (error) return null;
  return data as Quiz[];
}

export async function createQuiz(nom: string, picture: (Uint8Array | null), isprivate: boolean, id_creator: number): Promise<Quiz | null> {
  const newQuiz = {
    nom,
    picture,
    private: isprivate,
    id_creator
    };

  createLabelisable();
  
    const { data, error } = await supabase
    .from('quiz')
    .insert(newQuiz)
    .select('*')
    .single();

  if (error) return null;
  return data as Quiz;
}
