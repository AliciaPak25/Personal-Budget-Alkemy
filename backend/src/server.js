const express = require('express');
const morgan = require('morgan');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Global Variables
app.use((req, res, next) => {
    next();
});

//Routes
app.use(require('./routes/routes'));
app.use(require('./routes/authentication'));
app.use('/records', require('./routes/records.routes'));

//Starting the server
app.listen(app.get('port'), () => console.log('Server ready on PORT ' + app.get('port')));
