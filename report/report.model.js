const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    time_stamp: { type: String, required: true },
    product_name:{ type: String, required: true },
    filter_name:{ type: String, required: true },
    export_data:{type: Object, required: false}
});

module.exports = mongoose.model('report', schema);