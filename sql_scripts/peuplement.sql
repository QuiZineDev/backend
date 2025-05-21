-- =========================================
-- TRIPLEMENT DE LA QUANTITÉ DE DONNÉES EXEMPLES
-- Script monolithique complet (sans modifier le schéma)
-- =========================================

-- 1) VIDAGE COMPLET
TRUNCATE TABLE
  answers,
  participation,
  game_request,
  friend_request,
  amis,
  comment,
  modification_request,
  grade,
  nn_label_labelisable,
  label,
  nn_quiz_question,
  choice,
  question,
  labelisable,
  session,
  quiz,
  "user"
CASCADE;

ALTER SEQUENCE labelisable_id_seq RESTART WITH 1;
ALTER SEQUENCE "user_id_seq" RESTART WITH 1;
ALTER SEQUENCE quiz_id_seq RESTART WITH 1;
ALTER SEQUENCE session_id_seq RESTART WITH 1;
ALTER SEQUENCE question_id_seq RESTART WITH 1;
ALTER SEQUENCE choice_id_seq RESTART WITH 1;
ALTER SEQUENCE participation_id_seq RESTART WITH 1;
ALTER SEQUENCE answers_id_seq RESTART WITH 1;
ALTER SEQUENCE label_id_seq RESTART WITH 1;

INSERT INTO labelisable DEFAULT VALUES;
INSERT INTO labelisable DEFAULT VALUES;
INSERT INTO labelisable DEFAULT VALUES;
INSERT INTO labelisable DEFAULT VALUES;
INSERT INTO labelisable DEFAULT VALUES;
INSERT INTO labelisable DEFAULT VALUES;
INSERT INTO labelisable DEFAULT VALUES;
INSERT INTO labelisable DEFAULT VALUES;
INSERT INTO labelisable DEFAULT VALUES;
INSERT INTO labelisable DEFAULT VALUES;
INSERT INTO labelisable DEFAULT VALUES;
INSERT INTO labelisable DEFAULT VALUES;

-- 2) UTILISATEURS (9 en tout)
INSERT INTO "user"(id, username, password, picture, admin) VALUES
  (1, 'alice',    'pwdAlice', NULL, FALSE),
  (2, 'bob',      'pwdBob',   NULL, FALSE),
  (3, 'charlie',  'pwdChar',  NULL, TRUE),
  (4, 'david',    'pwdDav',   NULL, FALSE),
  (5, 'eva',      'pwdEva',   NULL, FALSE),
  (6, 'frank',    'pwdFrank', NULL, FALSE),
  (7, 'grace',    'pwdGrace', NULL, FALSE),
  (8, 'hank',     'pwdHank',  NULL, FALSE),
  (9, 'ivy',      'pwdIvy',   NULL, FALSE);


-- 3) QUIZ & LABELISABLE (6 quizzes)
INSERT INTO quiz(id, nom, picture, private, id_creator) VALUES
  (7, 'Général A',      NULL, FALSE, 1),
  (8, 'Culture B',      NULL, TRUE,  2),
  (9, 'Tech Quiz',      NULL, FALSE, 3),
  (10, 'Science Facts',  NULL, TRUE,  4),
  (11, 'History 101',    NULL, FALSE, 5),
  (12, 'Math Challenge', NULL, TRUE,  6);

-- 4) LABELS & LIAISONS (4 labels)
INSERT INTO label(id, nom) VALUES
  (1, 'trivia'),
  (2, 'culture générale'),
  (3, 'technologie'),
  (4, 'histoire');

INSERT INTO nn_label_labelisable(id_label, id_labelisable) VALUES
  (1,1),(2,2),(3,3),(4,5),(1,4),(2,6);

-- 5) SESSIONS (1 par quiz)
INSERT INTO session(id, id_quiz) VALUES
  (1,7),(2,8),(3,9),(4,10),(5,11),(6,12);

-- 6) QUESTIONS (6 questions, id_answer NULL pour l'instant)
INSERT INTO question(id, name, id_answer, grade, picture, duration, id_creator, private) VALUES
  (1, 'Capitale de la France ?',            NULL, 5, NULL, 30, 1, FALSE),
  (2, '5 + 7 = ?',                          NULL, 3, NULL, 15, 2, FALSE),
  (3, 'Quel langage est côté serveur ?',    NULL, 4, NULL, 20, 3, FALSE),
  (4, 'Symbole chimique de l''eau ?',       NULL, 4, NULL, 20, 4, FALSE),
  (5, 'Année de la Révolution française ?', NULL, 5, NULL, 30, 5, FALSE),
  (6, 'Résoudre 12 * 11 = ?',               NULL, 3, NULL, 15, 6, FALSE);

-- 7) CHOIX (4 par question, total 24)
INSERT INTO choice(id, content, id_question) VALUES
  -- Q1
  (1,  'Paris',     1),
  (2,  'Lyon',      1),
  (3,  'Marseille', 1),
  (4,  'Bordeaux',  1),
  -- Q2
  (5,  '12',        2),
  (6,  '10',        2),
  (7,  '13',        2),
  (8,  '11',        2),
  -- Q3
  (9,  'Java',      3),
  (10, 'Python',    3),
  (11, 'C#',        3),
  (12, 'HTML',      3),
  -- Q4
  (13, 'H2O',       4),
  (14, 'CO2',       4),
  (15, 'O2',        4),
  (16, 'NaCl',      4),
  -- Q5
  (17, '1789',      5),
  (18, '1799',      5),
  (19, '1804',      5),
  (20, '1776',      5),
  -- Q6
  (21, '132',       6),
  (22, '122',       6),
  (23, '142',       6),
  (24, '112',       6);

-- 8) MISE À JOUR DES RÉPONSES CORRECTES
UPDATE question
SET id_answer = c.id
FROM choice c
WHERE
  (question.id = 1 AND c.content = 'Paris')
  OR (question.id = 2 AND c.content = '12')
  OR (question.id = 3 AND c.content = 'Python')
  OR (question.id = 4 AND c.content = 'H2O')
  OR (question.id = 5 AND c.content = '1789')
  OR (question.id = 6 AND c.content = '132');

-- 9) LIAISONS QUIZ ⇆ QUESTION
INSERT INTO nn_quiz_question(id_quiz, id_question) VALUES
  (7,1),(7,2),(9,3),(10,4),(11,5),(12,6);

-- 10) AMITIÉS & DEMANDES D’AMI (6 relations + 3 demandes)
INSERT INTO amis(id_requestor, id_validator) VALUES
  (1,2),(2,3),(3,4),(4,5),(5,6),(6,7);

INSERT INTO friend_request(id_requestor, id_validator, datetime) VALUES
  (7,1, now()),
  (8,2, now()),
  (9,3, now());

-- 11) DEMANDES DE MODIFICATION, COMMENTAIRES, NOTES
INSERT INTO modification_request(id_requestor, id_creator, id_question, message, status) VALUES
  (2,1,1,'Typo possible ?',          FALSE),
  (3,2,2,'Reformuler la question.', FALSE),
  (4,3,3,'Ajouter plus d’options',   FALSE);

INSERT INTO comment(id_creator, id_quiz, message, datetime) VALUES
  (3,8,'Très bien fait !', now()),
  (4,9,'Sympa ce quiz tech.',      now()),
  (5,10,'Histoire captivante.',    now());

INSERT INTO grade(id_creator, id_labelisable, grade) VALUES
  (3,1,4.2),
  (4,3,3.8),
  (5,5,4.9);

-- 12) PARTIES, PARTICIPATIONS & RÉPONSES (6 sessions)
INSERT INTO game_request(id_session, id_requestor, id_validator, datetime) VALUES
  (1,1,2, now()),
  (2,2,3, now()),
  (3,3,4, now()),
  (4,4,5, now()),
  (5,5,6, now()),
  (6,6,7, now());

INSERT INTO participation(id, id_session, id_user, datetime, score) VALUES
  (1,1,1, now(),  8),
  (2,2,2, now(),  6),
  (3,3,3, now(),  7),
  (4,4,4, now(),  9),
  (5,5,5, now(), 10),
  (6,6,6, now(),  5);

INSERT INTO answers(id, id_participation, id_question, id_decision, duration) VALUES
  (1,1,1,  1, 12),
  (2,1,2,  5,  8),
  (3,2,2,  6, 10),
  (4,2,1,  2, 15),
  (5,3,3, 10, 20),
  (6,3,1,  1, 25),
  (7,4,4, 13, 18),
  (8,4,5, 17, 22),
  (9,5,5, 17, 14),
  (10,5,6,21, 16),
  (11,6,6,21, 19),
  (12,6,4,13, 21);
