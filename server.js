const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Posts= require('./routes/api/Posts');
var cors = require('cors');
const app= express();

//BodyParser Middleware
app.use(bodyParser.json());
app.use(cors());


//DB config

mongoose.connect('mongodb://<dbuser>:Dinesh97@@ds347367.mlab.com:47367/heroku_2qwqr7qz',{ useNewUrlParser: true }, {useMongoClient: true});
 
mongoose.Promise = global.Promise;
//User Routes

app.use('/api',Posts)

// Serve static assets if in production

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const PORT= process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
