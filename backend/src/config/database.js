const mongoose = require('mongoose')
mongoose.Promise = global.Promise //Para retirar os warning do mongoose
module.exports = mongoose.connect('mongodb://localhost/mymoney')
