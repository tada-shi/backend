const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    image : {
        type : String,
        required : false
    },
    summary : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('api', postSchema);