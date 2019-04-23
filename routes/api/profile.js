const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const passport = require('passport')

// Load Profile Model
const Profile = require('../../models/Profile');
// Load User User
const User = require('../../models/User')
const validateProfileInput = require('../../validation/profile')
const validateExperienceInput = require('../../validation/experience')
const validateEducationInput = require('../../validation/education')

// @route   GET api/profile
// @desc    Tests profile route
// @access  Public

router.get('/test', (req,res) => res.json({msg : "Profile works"}))
// @route   GET api/profile
// @desc    Tests profile route
// @access  Public

router.get('/', passport.authenticate('jwt',{session : false}), (req, res) => {
    const errors = {}
    Profile.findOne({user : req.user.id})
    .populate('user', ['name', 'avatar'])
        .then(profile =>{
            if(!profile) {
                errors.noprofile = 'There is no profile for this user'
                return res.status(404).json(errors)
            }
            res.json(profile)
        })
        .catch(err => res.status(404).json(err))
})


// @route   Post api/profile/all
// @desc    Get all profile 
// @access  public

router.get('/all', (req, res) => {
    const errors = {}
    Profile.find()
    .populate('user', ['name', 'avatar'])
    .then(profiles => {
        if(!profiles) {
            errors.noprofile = 'There is no profile for this user'
            res.status(404).json(errors)
        }
        res.json(profiles)
    })
    .catch(err=> res.status(404).json({profiles : 'This no profile for this user'}))
})

// @route   Post api/profile/handle/:handle
// @desc    Get profile by handle 
// @access  public

router.get('/handle/:handle', (req, res) => {
    const errors = {}
    Profile.findOne({handle : req.params.handle})
    .populate('user', ['name', 'avatar'])
    .then(profile => {
        if(!profile) {
            errors.noprofile = 'There is no profile for this user'
            res.status(404).json(errors)
        }
        res.json(profile)
    })
    .catch(err=> res.status(404).json(err))

})

// @route   Post api/profile/user/:user_id
// @desc    Get profile by user ID 
// @access  public

router.get('/user/:user_id', (req, res) => {
    const errors = {}
    Profile.findOne({user : req.params.user_id})
    .populate('user', ['name', 'avatar'])
    .then(profile => {
        if(!profile) {
            errors.noprofile = 'There is no profile for this user'
            res.status(404).json(errors)
        }
        res.json(profile)
    })
    .catch(err=> res.status(404).json({profile : 'This no profile for this user'}))

})

// @route   Post api/profile
// @desc    Create user profile 
// @access  Private

router.post('/', passport.authenticate('jwt',{session : false}),(req, res) => {
    
    const {errors, isValid} = validateProfileInput(req.body);
    // Check Validation
    if(!isValid) {
        // return any errors whit 400 status
        return res.status(400).json(errors)
    }
    const profileFields = {}
    profileFields.user = req.user.id;
    if(req.body.handle) profileFields.handle = req.body.handle
    if(req.body.company) profileFields.company = req.body.company
    if(req.body.website) profileFields.website = req.body.website
    if(req.body.location) profileFields.location = req.body.location
    if(req.body.bio) profileFields.bio = req.body.bio
    if(req.body.status) profileFields.status = req.body.status
    if(req.body.githubusername) profileFields.githubusername = req.body.githubusername
    // Skils split into array
    if(typeof req.body.skills !== 'undefined') {
        profileFields.skills = req.body.skills.split(',')
    }
    // Scial
    profileFields.social ={}
    if(req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if(req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if(req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if(req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if(req.body.instagram) profileFields.social.instagram = req.body.instagram;

    Profile.findOne({user : req.user.id}).then(profile => {
        if (profile) {
            // Update
            Profile.findOneAndUpdate(
                // { user: req.user.id },
                { user: req.user.id },
                // {$set : profileFields},
                {$set : profileFields},
                { new: true }
            ).then(profile => res.json(profile));
        }else{
            // create

            // Check if handle existe
            Profile.findOne({handle : profileFields.handle}).then(profile => {
                if(profile) {
                    errors.handle = 'That handle already exist';
                    res.status(400).json(errors)
                }
                // Save profile
                new Profile(profileFields).save().then(profile => res.json(profile))
            })
        }
    })
})
// @route   Post api/profile/experience
// @desc    Add experience to profile 
// @access  Private

router.post('/experience', passport.authenticate('jwt', {session: false}), (req, res) => {
    const {errors, isValid} = validateExperienceInput(req.body);
    // Check Validation
    if(!isValid) {
        // return any errors whit 400 status
        return res.status(400).json(errors)
    }
    Profile.findOne({user: req.user.id})
    .then(profile => {
        const newExp = {
            title : req.body.title,
            company: req.body.company,
            location: req.body.location,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description  
        }
        profile.experience.unshift(newExp);
        profile.save().then(profile => res.json(profile))

    })
})

// @route   Post api/profile/education
// @desc    Add experience to profile 
// @access  Private

router.post(
    '/education',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateEducationInput(req.body);
  
      // Check Validation
      if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
      }
  
      Profile.findOne({ user: req.user.id }).then(profile => {
        const newEdu = {
          school: req.body.school,
          degree: req.body.degree,
          fieldofstudy: req.body.fieldofstudy,
          from: req.body.from,
          to: req.body.to,
          current: req.body.current,
          description: req.body.description
        };
        console.log(newEdu)
        // Add to exp array
        profile.education.push(newEdu);
  
        profile.save().then(profile => res.json(profile));
      })
    .catch(err => res.json(err));
    }
);

// @route   Delete api/profile/experience/:exp_id
// @desc    Delete experience from  profile 
// @access  Private

router.delete(
    '/experience/:exp_id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Profile.findOne({user: req.user.id}).then(profile => {
            // Get remove Index
            const removeIndex = profile.experience
            .map(item => item.id)
            .indexOf(req.params.exp_id);

            // splice out of array
            profile.experience.splice(removeIndex, 1);
            // save
            profile.save().then(profile => res.json(profile))
        })
        .catch(err => res.status(404).json(err))
    }
);

// @route   Delete api/profile/education/:edu_id
// @desc    Delete education from  profile 
// @access  Private

router.delete(
    '/education/:edu_id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Profile.findOne({user: req.user.id}).then(profile => {
            // Get remove Index
            const removeIndex = profile.education
            .map(item => item.id)
            .indexOf(req.params.edu_id);

            // splice out of array
            profile.education.splice(removeIndex, 1);
            // save
            profile.save().then(profile => res.json(profile))
        })
        .catch(err => res.status(404).json(err))
    }
);

// @route   Delete api/profile
// @desc    Delete profile 
// @access  Private

router.delete(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
       Profile.findOneAndDelete({user : req.user.id})
        .then(()=> {
            User.findOneAndDelete({_id: req.user.id})
                .then(() => res.json({success : true}))
        })
    }
);
  
module.exports = router