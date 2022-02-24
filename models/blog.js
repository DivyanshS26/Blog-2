const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    desc: {
        type: String,
        trim: true
    },
    blog: {
        type: String,
        trim: true,
        required: true
    }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;