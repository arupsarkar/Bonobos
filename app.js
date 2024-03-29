const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loyaltyRouter = require('./routes/loyalty');
const swaggerDocRouter = require('./routes/swaggerDoc')
const fitDetailsRouter = require('./routes/fitDetails')
const cartRouter = require('./routes/cart')

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/loyalty', loyaltyRouter);
app.use('/swaggerDoc', swaggerDocRouter)
app.use('/fitdetails', fitDetailsRouter)
app.use('/cart', cartRouter)

module.exports = app;
