import { supabase } from '../supabaseClient';
import { Choice,findChoicesByQuestionId } from '../models/Choice';
import { Question } from '../types/core/Question';
import { QuestionWithChoices } from '../types/PopulatedTypes';
import { createLabelisable } from './Labelisable';

export	{ Question };

export async function findQuestionById(id: number): Promise<QuestionWithChoices | null> {
  const { data, error } = await supabase
    .from('question')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return null;
  data.choices = await findChoicesByQuestionId(id);
  return data as QuestionWithChoices;
}

export async function createQuestion(name: string, id_answer: number, grade: number, picture: (Uint8Array | null), duration: number, id_creator: number, isprivate: boolean): Promise<Question | null> {
  const newQuestion = {
    name,
    id_answer,
    grade,
    picture,
    duration,
    id_creator,
    private: isprivate
  };

  createLabelisable();

  const { data, error } = await supabase
    .from('question')
    .insert(newQuestion)
    .select('*')
    .single();

  if (error) return null;
  return data as Question;
}

export async function updateQuestion(id: number, name: string, id_answer: number, grade: number, picture: (Uint8Array | null), duration: number, id_creator: number, isprivate: boolean): Promise<Question | null> {
  const { data, error } = await supabase
    .from('question')
    .update({ name, id_answer, grade, picture, duration, id_creator, private: isprivate })
    .eq('id', id)
    .select('*')
    .single();

  if (error) return null;
  return data as Question;
}

export async function deleteQuestion(id: number): Promise<boolean> {
  const { error } = await supabase
    .from('question')
    .delete()
    .eq('id', id);

  if (error) return false;
  return true;
}

export async function findQuestionsByQuizId(quizId: number): Promise<QuestionWithChoices[]> {
  const { data, error } = await supabase
    .from('question')
    .select('*')
    .eq('id_quiz', quizId);

  if (error) return [];
  const questions = data as QuestionWithChoices[];
  for (const question of questions) {
    question.choices = await findChoicesByQuestionId(question.id);
  }
  return questions;
}
