const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const middlewares = [
    morgan('dev'),
    cors(),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
];

module.exports = (app) => {
    middlewares.forEach(middleware => app.use(middleware));
};