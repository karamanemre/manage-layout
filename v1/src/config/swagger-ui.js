const swaggerOptions = {
    swaggerDefinition : {
      info:{
        title: 'Manage-Layout API',
        version: '1.0.0'
      },
      
    },
    apis:['../app.js'],
    securityDefinitions: {
        bearerAuth: {
          type: 'apiKey',
          name: 'Authorization',
          scheme: 'bearer',
          in: 'header',
        },
      },
  };

module.exports = {
    swaggerOptions
}