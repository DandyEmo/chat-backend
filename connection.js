const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.DB_USER);
console.log(process.env.DB_PW);

let mongoURI = '';

if (process.env.NODE_ENV === 'production') {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = 'mongodb://localhost/finalproject';
}

mongoose.connect(
  mongoURI,
  //   `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.2chji07.mongodb.net/?retryWrites=true&w=majority`,
  err => {
    if (err) console.log(err);
    else console.log('mongdb is connected', mongoURI);
    // console.log('connected to mongodb');
  }
);

mongoose.Promise = Promise;

module.exports = mongoose;
