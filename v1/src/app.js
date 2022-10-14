const express = require("express");
const helmet = require("helmet");
const config = require("./config");
const loaders = require('./loaders');
const { ProjectRoute, UsersRoute } = require("./api-routes")

config();
loaders();

const app = express();
app.use(express.json());
app.use(helmet())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(process.env.APP_PORT,() => {
    console.log("Server up...");
    app.use("/project", ProjectRoute)
    app.use("/users", UsersRoute)
});

