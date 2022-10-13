const express = require("express");
const helmet = require("helmet");
const config = require("./config");
const {ProjectRoute} = require("./api-routes")

config();

const app = express();
app.use(express.json);
app.use(helmet())

//app.use(cors({
    
//}))

app.listen(process.env.APP_PORT,() => {
    console.log("sunucu ayakta...");
    app.use("/projects",ProjectRoute.router)
})

