const app = require("./config/express");
const db = require("./database/sqlite");
db.init();

const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

console.log("App carregado!"); 

app.use("/api", routes);
app.use(errorHandler);

module.exports = app;
