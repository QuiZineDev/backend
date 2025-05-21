// Swagger options for swagger-jsdoc
module.exports = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'QuiZine API',
      version: '1.0.0',
      description: 'Documentation complète de l’API QuiZine',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Serveur local',
      },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: 'apiKey',
          in: 'cookie',
          name: 'connect.sid',
        },
      },
    },
    security: [{ cookieAuth: [] }],
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // Documentation via JSDoc
};
