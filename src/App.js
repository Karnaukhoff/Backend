const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/users");
const booksRouter = require("./routes/books");
const loggerOne = require("./middleware/loggerOne");

dotenv.config();

const { 
    PORT = 3000, 
    API_URL = 'http://localhost' 
} = process.env;

const app = express();

app.use(cors());

app.use(loggerOne);
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.status(200);
    response.send("Hello, World!");
});

app.use(userRouter)
app.use(booksRouter)

app.listen(PORT, () => {
    console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});