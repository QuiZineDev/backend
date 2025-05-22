import { Quiz } from "./core/Quiz";
import { Question } from "./core/Question";
import { User } from "./core/User";
import { Choice } from "./core/Choice";
import { Session } from "./core/Session";
import { Participation } from "./core/Participation";
import { Answers } from "./core/Answer";
import { Grade } from "./core/Grade";
import { Labelisable } from "./core/Labelisable";

// Helpers
export type LabelisableEntity = Quiz | Question;

export type ID = number;

export function isQuiz(entity: LabelisableEntity): entity is Quiz {
  return (entity as Quiz).nom !== undefined;
}

export function isQuestion(entity: LabelisableEntity): entity is Question {
  return (entity as Question).name !== undefined;
}

// Populated types
export interface QuizWithQuestions extends Quiz {
  questions: Question[];
}
export interface QuizWithQuestionsWithChoices extends Quiz {
  questions: QuestionWithChoices[];
  tags: string[];
  createdBy: string;
}

export interface QuizWithCreator extends Quiz {
  creator: User;
}

export interface QuestionWithChoices extends Question {
  choices: Choice[];
}

export interface QuestionWithAnswerChoice extends Question {
  answer: Choice;
}

export interface SessionWithQuiz extends Session {
  quiz: Quiz;
}

export interface SessionWithParticipants extends Session {
  participants: ParticipationWithUser[];
}

export interface ParticipationWithUser extends Participation {
  user: User;
}

export interface ParticipationWithAnswers extends Participation {
  answers: AnswersWithDetails[];
}

export interface AnswersWithDetails extends Answers {
  question: Question;
  decision: Choice;
}

export interface CommentWithUser extends Comment {
  creator: User;
}

export interface GradeWithLabel extends Grade {
  labelisable: Labelisable;
}