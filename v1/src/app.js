const express = require("express");
const helmet = require("helmet");
const config = require("./config");
const loaders = require("./loaders");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require('swagger-jsdoc');
const { ProjectRoute, UsersRoute } = require("./api-routes");
const { swaggerOptions } = require("./config/swagger-ui");

config();
loaders();

const app = express();
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(express.json());
app.use(helmet());

app.get("a",(req,res)=>{
  res.status(200).send();
})

app.listen(process.env.APP_PORT, () => {
  console.log("Server up...");
  app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerDocs));
  app.use("/project", ProjectRoute);
  app.use("/users", UsersRoute);
});
