import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'QuiZine API',
      version: '1.0.0',
      description: 'Documentation complète de l’API QuiZine',
    },
    servers: [
      {
        url: 'https://quiz.kerboul.me/api',
        description: 'Développement en production',
      },
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            username: { type: 'string', example: 'quizine' },
            password: { type: 'string', example: 'azerty' },
            picture: { type: 'string', format: 'binary', nullable: true },
            admin: { type: 'boolean', example: false }
          }
        },
        Amis: {
          type: 'object',
          properties: {
            id_requestor: { type: 'integer', example: 1 },
            id_validator: { type: 'integer', example: 2 }
          }
        },
        Quiz: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 7 },
            nom: { type: 'string', example: 'Général A' },
            picture: { type: 'string', format: 'binary', nullable: true },
            private: { type: 'boolean', example: false },
            id_creator: { type: 'integer', example: 1 }
          }
        },
        Question: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Capitale de la France ?' },
            id_answer: { type: 'integer', example: 1 },
            grade: { type: 'integer', example: 5 },
            picture: { type: 'string', format: 'binary', nullable: true },
            duration: { type: 'integer', example: 30 },
            id_creator: { type: 'integer', example: 1 },
            private: { type: 'boolean', example: false }
          }
        },
        Choice: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            content: { type: 'string', example: 'Paris' },
            id_question: { type: 'integer', example: 1 }
          }
        },
        QuizWithQuestionsWithChoices: {
          allOf: [
            { $ref: '#/components/schemas/Quiz' },
            {
              type: 'object',
              properties: {
                questions: {
                  type: 'array',
                  items: {
                    allOf: [
                      { $ref: '#/components/schemas/Question' },
                      {
                        type: 'object',
                        properties: {
                          choices: {
                            type: 'array',
                            items: { $ref: '#/components/schemas/Choice' }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          ]
        }
      }
    }
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts', './src/models/*.ts', './src/types/core/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Express) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
