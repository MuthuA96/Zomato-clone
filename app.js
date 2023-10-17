require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,
({ useNewUrlParser: true, useUnifiedTopology: true}))

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json());

const userRouter = require('../RestaurantApp/Route/route');

app.use('/', userRouter);

app.listen(8888, () => console.log("server started"));



 




















/*const morgan = require('morgan');

const userRouter = require('../RestaurantApp/Route/route');
//sconst { TokenExpiredError } = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/route", userRouter);

const port = 8888;
app.listen((port), () => {
    console.log("Listening port..." + port);
});*/