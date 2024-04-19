require('dotenv').config();
const express = require('express');
const createError = require('http-errors');

const middlewares = require('./middlewares');
const contactRoute = require('./routes/contactRoute');

const app = express();

// set middlewares 
middlewares(app);

// set routes
app.use('/api/contacts', contactRoute);

// client error handling
app.use((req, res, next) => {
    next(createError(404, 'route not found'));
    next();
});

// server error handling
app.use((err, req, res, next) => {
    return errorResponse(res, {
        statusCode: err.status,
        message: err.message
    });
});


module.exports = app;
