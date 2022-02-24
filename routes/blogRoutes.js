const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

// get all the blogs from
router.get('/blogs', async (req, res) => {
    const blogs = await Blog.find({});

    res.render('blog/index', { blogs });
});

// get the new form to create new blog
router.get('/blogs/new', async (req, res) => {
    res.render('blog/new');
})

// creating new blog from the payload

router.post('/blogs', async (req, res) => {
    const newBlog = {
        ...req.body
    }
    await Blog.create(newBlog);

    res.redirect('/blogs');
})

// show a particular blog

router.get('/blogs/:id', async (req, res) => {
    const { id } = req.params;
    const blogs = await Blog.findById(id);
    res.render('blog/show', { blogs });
})

// updating blog with the given payload

router.get('/blogs/:id/edit', async (req, res) => {
    const { id } = req.params;
    const blogs = await Blog.findById(id);
    res.render('blog/edit', { blogs });
})

// updating the blog with new data

router.patch('/blogs/:id', async (req, res) => {
    const updateData = req.body;
    const { id } = req.params;
    await Blog.findByIdAndUpdate(id, updateData);
    res.redirect(`/blogs/${id}`);
});

router.delete('/blogs/:id', async (req, res) => {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.redirect('/blogs');

})

module.exports = router;