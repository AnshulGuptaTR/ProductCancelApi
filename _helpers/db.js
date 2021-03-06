const config = require('../config.json');
const mongoose = require('mongoose');
// console.log(mongoose.connection.readyState);
// const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.connectionString);
mongoose.Promise = global.Promise;

module.exports = {
    report: require('../report/report.model')
};