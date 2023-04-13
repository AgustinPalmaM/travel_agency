import express from "express";
import http from "http";
import reload from "reload";
import router from "./routes/index.js";

const app = express();

const port = process.env.PORT || 3000;

// Enable pug - template engine to use in this project
app.set('view engine', 'pug')

// Define public folder
app.use(express.static('public'));

// Add router
app.use('/', router);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`El servidor esta corriendo en ${port}`);
});
reload(app);
