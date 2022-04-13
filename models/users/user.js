var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String },
    lastName: { type: String },
    nationality: { type: String },
});

module.exports = mongoose.model('User', userSchema);