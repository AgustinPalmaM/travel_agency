import express from "express";
import http from "http";
import reload from "reload";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

// Connect database
db.authenticate()
  .then( () => console.log('database connected'))
  .catch( error => console.log(error))

const port = process.env.PORT || 4000;

// Enable pug - template engine to use in this project
app.set('view engine', 'pug')

// Get current year
app.use( (req, res, next ) => {
  const year = new Date();
  res.locals.currentYear = year.getFullYear();
  res.locals.websiteName = 'Travel Agency'
  return next();
})

// Define public folder
app.use(express.static('public'));

// Add router
app.use('/', router);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`El servidor esta corriendo en ${port}`);
});
reload(app);
