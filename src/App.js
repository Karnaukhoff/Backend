const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const booksRouter = require("./routes/books");
const loggerOne = require("./middleware/loggerOne");

dotenv.config();

const { 
    PORT = 3000, 
    API_URL = 'http://localhost',
    MONGO_URL = "mongodb://127.0.0.1:27017/backend",
} = process.env;

mongoose
    .connect(MONGO_URL)
    .then(console.log("Connected to MongoDB"))
    .catch((error) => console.log(error));

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