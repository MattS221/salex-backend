const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://deploy:deploy@saleex.aac8o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

module.exports = mongoose;
