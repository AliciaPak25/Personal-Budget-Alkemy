const express = require('express');
const morgan = require('morgan');
const Router = require('./routes/records.routes');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use(Router)

//Starting the server
app.listen(app.get('port'), () => console.log('Server ready on PORT ' + app.get('port')));
