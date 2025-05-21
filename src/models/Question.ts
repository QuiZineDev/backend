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

export async function createQuestion(name: string, id_answer: number, grade: 0, picture: (Uint8Array | null), duration: number, id_creator: number, isprivate: boolean): Promise<Question | null> {
  const newQuestion = {
    id: null,
    name,
    id_answer,
    grade,
    picture,
    duration,
    id_creator,
    private: isprivate
  };

  const labelisable = await createLabelisable();
  newQuestion.id = labelisable.id;
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
    .from('nn_quiz_question')
    .select('question(*)')
    .eq('id_quiz', quizId);

  if (error || !data) return [];
  // Extract the question objects from the join result
  const questions = data.map((row: any) => row.question) as QuestionWithChoices[];
  for (const question of questions) {
    question.choices = await findChoicesByQuestionId(question.id);
  }
  return questions;
}

export async function findQuestionByCreatorId(creatorId: number): Promise<QuestionWithChoices[]> {
  const { data, error } = await supabase
    .from('question')
    .select('*')
    .eq('id_creator', creatorId);

  if (error || !data) return [];
  // Extract the question objects from the join result
  const questions = data as QuestionWithChoices[];
  for (const question of questions) {
    question.choices = await findChoicesByQuestionId(question.id);
  }
  return questions;
}

export async function findQuestionsByLabelId(labelId: number): Promise<QuestionWithChoices[] | null> {
  // 1. Get all labelisable ids for the given label
  const { data: nnData, error: nnError } = await supabase
    .from('nn_label_labelisable')
    .select('id_labelisable')
    .eq('id_label', labelId);

  if (nnError || !nnData || nnData.length === 0) return [];

  // 2. Extract labelisable ids
  const labelisableIds = nnData.map((row: any) => row.id_labelisable);

  // 3. Get all questions whose id is in labelisableIds
  const { data: questions, error: qError } = await supabase
    .from('question')
    .select('*')
    .in('id', labelisableIds);

  if (qError || !questions) return [];
  const questionswithchoices = questions as QuestionWithChoices[];
  for (const question of questionswithchoices) {
    question.choices = await findChoicesByQuestionId(question.id);
  }
  return questionswithchoices;
}

