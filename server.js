const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
const PORT = process.env.PORT || 3001;

// Data Parser and Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// use express to create a route for every file in the 'public' folder and give it a '/' route
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// listener: starts the server
app.listen(PORT, ()=>{
    console.log(`Now listening at http://localhost:${PORT}`);
})