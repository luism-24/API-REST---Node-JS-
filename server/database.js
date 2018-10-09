const mongoose = require('mongoose'); 
const URI = 'mongodb://localhost/dojo-example'; 

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err)
    );
module.exports = mongoose; 