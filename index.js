const express = require("express");
const bodyParser = require("body-parser");
// const multer = require("multer");
const compression = require("compression");
const helmet = require("helmet");
const morgan = require('morgan')

const { errorMiddleware } = require("./middlewares");

const {userRouter, employeeRoute} = require("./router");
require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 5000;

// middleware
// app.use(multer().none());
app.use(compression({
    threshold: 0
}))
app.use(helmet());
app.use(morgan('common', (tokens, req, res) => {
    console.log({
        tokens,
        req,
        res
    })
    console.log('morgan common')
    const result =  [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' ')

    console.log(result)

    return result
}))


// documentation
// https://expressjs.com/en/api.html
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
}));
// http://expressjs.com/en/resources/middleware/body-parser.html#bodyparserjsonoptions
app.use(bodyParser.json());

app.disable('x-powered-by');

app.use("/user", userRouter);
app.use("/employee", employeeRoute);
app.get("/", (req, res) => {
    res.json({
        message: "Hello World",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

