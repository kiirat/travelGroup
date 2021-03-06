const express = require('express')
const router = express.Router();
const mongosse = require('mongoose');
const passport = require('passport');


// Post Model
const Post = require('../../models/Post')
// Profile model
const Profile = require('../../models/Profile');

// Validation
const validatePostInput = require('../../validation/post')

router.get('/test', (req,res) => res.json({msg : "Posts works"}))

// @route   GET api/posts
// @desc    Get post route
// @access  Public

router.get('/', (req, res)=>{
    Post.find()
    .sort({date: -1})
    .then(posts => res.json(posts))
    .catch(error => res.status(404).json({ nopostsfound: 'No posts found' }))
})
// @route   GET api/post By id
// @desc    Get post route by id
// @access  Public

router.get('/:id', (req, res)=>{
    Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(error => res.status(404).json({nopostfound: 'This Id doesnt match any id'}))
})

// @route   Post api/posts
// @desc    Create post route
// @access  Private

router.post('/', passport.authenticate('jwt', {session: false}), (req, res)=> {

    const {errors, isValid} = validatePostInput(req.body);
    if(!isValid) {
        return res.json(400).json(errors)
    }

    const newPost = new Post({
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
    });
    newPost.save().then(post => res.json(post))
})

// @route   Delete api/posts
// @desc    Delete post route
// @access  Private

router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      Profile.findOne({ user: req.user.id }).then(profile => {
        Post.findById(req.params.id)
          .then(post => {
            // Check for post owner
            if (post.user.toString() !== req.user.id) {
              return res
                .status(401)
                .json({ notauthorized: 'User not authorized' });
            }
  
            // Delete
            post.remove().then(() => res.json({ success: true }));
          })
          .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
      });
    }
  );
// @route   Post api/posts/like/:id
// @desc    Delete post route
// @access  Private

router.post(
    '/like/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      Profile.findOne({ user: req.user.id }).then(profile => {
        Post.findById(req.params.id)
        // .populate('user', ['name']) 
        .then(post => {
            
            if(post.likes.filter(like => like.user.toString() === req.user.id).length == 1){
                return res.status(400).json({alreadyLiked: 'User already liked this post'})
            } 
            // Add user id to likes array
            post.likes.unshift({user: req.user.id})
            post.save().then(post => res.json(post))
            
          })
          .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
      });
    }
  );


// @route   Post api/posts/unlike/:id
// @desc    Unlike post route
// @access  Private

router.post(
    '/unlike/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      Profile.findOne({ user: req.user.id }).then(profile => {
        Post.findById(req.params.id)
        // .populate('user', ['name']) 
        .then(post => {
            
            // if(post.likes.filter(like => like.user.toString() === req.user.id).length === 0){
            //     return res.status(400).json({alreadyLiked: 'You have not yet liked this post '})
            // } 
            if (
                post.likes.filter(like => like.user.toString() === req.user.id)
                  .length === 0
              )
              {
                return res
                  .status(400)
                  .json({ notliked: 'You have not yet liked this post' });
              }
            // Add user id to likes array
            const removelike = post.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id);

            // Remove index        
            post.likes.splice(removelike, 1);
            // Save
            post.save().then(post => res.json(post));
            
          })
          .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
      });
    }
);

// @route   Post api/posts/comment/:id
// @desc    comment post route
// @access  Private
router.post('/comment/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
    const {errors, isValid} = validatePostInput(req.body);
    if(!isValid) {
        return res.json(400).json(errors)
    }
    Post.findById(req.params.id)
        .then(post => {
            const newComment = {
                text: req.body.text,
                name: req.body.name,
                avatar: req.body.avatar,
                user: req.user.id
            }
            post.comments.unshift(newComment)
            post.save().then(post => res.json(post))
        })
        .catch(err => res.status(404).json({postnotfound: 'Post not found'}))
})

// @route   delete api/posts/comment/:comment_id
// @desc    comment post route
// @access  Private
router.delete('/comment/:id/:comment_id', passport.authenticate('jwt', {session: false}), (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            // check if Comment exit
            if(post.comments.filter(comment => comment._id.toString() === req.params.comment_id).length === 0){
                return res.status(404).json({commentNotExist: 'Comment not doese not exist'})
            }
            const removeIndex = post.comments
                .map(item => item._id.toString())
                .indexOf(req.params.id)

            // Splice element from array

            post.comments.splice(removeIndex, 1)
            
            // save

            post.save().then(post => res.json(post) )
      
        })
        .catch(err => res.status(404).json({postnotfound: 'Post not found'}))
})

  

  


module.exports = router