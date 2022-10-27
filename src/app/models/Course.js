const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, maxLength: 250},
    description: {type: String, maxLength: 250},
    image: {type: String, maxLength: 250},
    slug: {type: String },
    videoId: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
},{
    collection: 'Course'
})

module.exports = mongoose.model('Course', Course)