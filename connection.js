const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.DB_USER);
console.log(process.env.DB_PW);

mongoose.connect(
  'mongodb://localhost/finalproject'
  //   `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.2chji07.mongodb.net/?retryWrites=true&w=majority`,
  //   err => {
  //     if (err) console.log(err);
  //     else console.log('mongdb is connected');
  //     // console.log('connected to mongodb');
  //   }
);

mongoose.Promise = Promise;

module.exports = mongoose;
