const express = require('express');
const router = express.Router();

//Post Model

const Post= require('../../models/PostSchema');

//@route GET api/posts
//@desc GET All POSTS
//@access Pubilc

router.get('/NewPost', (req, res) => {
    Post.find()
    //.sort({ date:-1 })
    .then(Posts => res.json(Posts));
});

router.post('/AddNewPost', (req, res) => {
    const newPost= new Post({
       title: req.body.title 
    });
  newPost.save().then(post => res.json(post));  
});

module.exports = router;