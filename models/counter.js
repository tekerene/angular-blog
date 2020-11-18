
var mongoose = require('mongoose');
const { schema } = require('./User');
var Schema = mongoose.Schema;

var schemaOptions = {
    timestamps: { createdAt: 'created_at', updatesAt: 'updated_at'},
};
const visitScema =  new schema({
  counter: {
        type: Number,
        required: true
    }
}, schemaOptions);
const visits = mongoose.mode('visits', visitScema, 'visits');
module.exports = visits;