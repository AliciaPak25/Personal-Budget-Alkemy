const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
var bodyParser = require('body-parser')

//Importing routes
const Router = require('./routes/routes');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(morgan("dev"));
app.use(cors());
/* app.use(express.json()); */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Global Variables
app.use((req, res, next) => {
    next();
});

//Routes
app.use(Router);

/* app.use(require('./routes/routes'));
app.use(require('./routes/authentication'));
app.use('/records', require('./routes/records.routes')); */

//Starting the server
app.listen(app.get('port'), () => console.log('Server ready on PORT ' + app.get('port')));
