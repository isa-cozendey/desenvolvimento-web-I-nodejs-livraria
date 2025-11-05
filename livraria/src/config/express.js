const express = require("express");
const morgan = require("morgan");
const session = require("express-session");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(session({
 secret: process.env.SESSION_SECRET || "livraria_secret_key",
 rolling: true, 
 cookie: {
 httpOnly: true,
 secure: false, 
 maxAge: 1000 * 60 * 60 * 2 
 }
}));

module.exports = app;
