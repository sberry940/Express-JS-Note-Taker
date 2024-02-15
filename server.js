// added dependencies 
const express = require('express');
// creates express variable
const app = express();

// defines port 
const PORT = process.env.PORT || 3001;

// adds middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);