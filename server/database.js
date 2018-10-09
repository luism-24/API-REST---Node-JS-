const mongoose = require('mongoose'); 
const URI = 'mongodb://example:l9910240792*@ds127293.mlab.com:27293/api-rest-nodejs-database'; 

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err)
    );
module.exports = mongoose; 