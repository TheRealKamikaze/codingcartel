const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/codepiedb');

const Schema = mongoose.Schema;
 
const contestsubscribe = new Schema({
  
    "code": String,
    "name": String,
    "startDate": String,
    "endDate": String
  
});

const Contestsubscribe = mongoose.model('Contestsubscribe', contestsubscribe);


module.exports = Contestsubscribe;