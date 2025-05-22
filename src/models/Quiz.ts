import { supabase } from '../supabaseClient';
import { createQuestion, findQuestionsByQuizId, updateQuestion } from './Question';
import { Quiz } from '../types/core/Quiz';
import { findUserById, User } from './User';
import { QuizWithQuestionsWithChoices } from '../types/PopulatedTypes';
import { createLabelisable } from './Labelisable';
import { QuizTODO } from '../types/core/QuizTODO';
import { createChoice } from './Choice';
import { findLabelByNameExact,createLabel,labelise,findLabelsByLabelisableId } from './Label';
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
    data.questions = questions;
  });
  const labelsToMap = await findLabelsByLabelisableId(id);
  data.tags = labelsToMap.map((label) => label.nom);
  data.createdBy = (await findUserById(data.id_creator)).username;
  return data as QuizWithQuestionsWithChoices;
}

export async function findQuizzesByName(name: string): Promise<QuizWithQuestionsWithChoices[]> {
  const { data, error } = await supabase
    .from('quiz')
    .select('*')
    .ilike('nom', `%${name}%`);

    if (error) return null;
    data.forEach(async (quiz: QuizWithQuestionsWithChoices) => {
      await findQuestionsByQuizId(quiz.id).then((questions) => {
        quiz.questions = questions;
      });
    });
  return data as QuizWithQuestionsWithChoices[];
}

export async function findQuizzesByCreator(creatorId: number): Promise<QuizWithQuestionsWithChoices[]> {
  const { data, error } = await supabase
    .from('quiz')
    .select('*')
    .eq('id_creator', creatorId);

  if (error) return null;
  data.forEach(async (quiz: QuizWithQuestionsWithChoices) => {
      await findQuestionsByQuizId(quiz.id).then((questions) => {
        quiz.questions = questions;
      });
    });
  return data as QuizWithQuestionsWithChoices[];
}

export async function createQuiz(nom: string, picture: (Uint8Array | null), isprivate: boolean, id_creator: number): Promise<Quiz | null> {
  const newQuiz = {
    id: null,
    nom,
    picture,
    private: isprivate,
    id_creator
    };

  const labelisable = await createLabelisable()
  newQuiz.id = labelisable.id

  const { data, error } = await supabase
  .from('quiz')
  .insert(newQuiz)
  .select('*')
  .single()
  
  //console.log("Created quiz");

  if (error) return null;
  return data as Quiz;
}

export async function findQuizzesByLabelId(labelId: number): Promise<QuizWithQuestionsWithChoices[] | null> {
  // 1. Get all labelisable ids for the given label
  const { data: nnData, error: nnError } = await supabase
    .from('nn_label_labelisable')
    .select('id_labelisable')
    .eq('id_label', labelId);

  if (nnError || !nnData || nnData.length === 0) return [];

  // 2. Extract labelisable ids
  const labelisableIds = nnData.map((row: any) => row.id_labelisable);
  if (labelisableIds.length === 0) return [];

  // 3. Get all quizzes whose id is in labelisableIds
  const { data: quizzes, error: qError } = await supabase
    .from('quiz')
    .select('*')
    .in('id', labelisableIds);

  if (qError || !quizzes) return [];
  const data = quizzes as QuizWithQuestionsWithChoices[];
  data.forEach(async (quiz: QuizWithQuestionsWithChoices) => {
      await findQuestionsByQuizId(quiz.id).then((questions) => {
        quiz.questions = questions;
      });
    });
  return data as QuizWithQuestionsWithChoices[];
}

export async function allAccessibleQuizOf(user:User): Promise<QuizWithQuestionsWithChoices[] | null> {
  const { data, error } = await supabase
    .from('quiz')
    .select('*')
    .or(`id_creator.eq.${user.id}, private.eq.false`);

  if (error) return null;
  for(let i = 0; i++; i < data.length){
    await findQuestionsByQuizId(data[i].id).then((questions) => {
      data[i].questions = questions;
    });
  }

  return data as QuizWithQuestionsWithChoices[];
}

export async function createQuizWithQuestionsWithChoices(quiz: QuizTODO, user: User): Promise<QuizWithQuestionsWithChoices | null> {
  const newQuiz = await createQuiz(quiz.nom, quiz.picture, quiz.private, user.id);
  if (!newQuiz) return null;

  quiz.tags?.forEach(async (tag) => {
    let labelTable = await findLabelByNameExact(tag);
    if (labelTable == null) {
      labelTable = await createLabel(tag);
    }
    await labelise(labelTable.id, newQuiz.id);
  });

  for (const question of quiz.questions || []) {
    const newQuestion = await createQuestion(question.name, null, 0, question.picture, question.duration, user.id, question.private);
    let isAnswer = true
    if (!newQuestion) return null;
    for (const choice of question.choices || []) {
      const choiceDone = await createChoice(choice.content, newQuestion.id);
      if(isAnswer){
        isAnswer = false
        updateQuestion(newQuestion.id, question.name, choiceDone.id, 0, question.picture, question.duration, user.id, question.private);
      }
    }
    const nn_quiz_question = await supabase
      .from('nn_quiz_question')
      .insert({ id_quiz: newQuiz.id, id_question: newQuestion.id });
    if (nn_quiz_question.error) return null;
  }
  return findQuizById(newQuiz.id, user); 
}