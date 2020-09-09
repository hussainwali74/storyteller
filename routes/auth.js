const express = require('express')
const passport = require('passport')
const router = express.Router()

//@desc Auth with Google
//@route Get /auth/google

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//@desc google auth callback
// @route GET /auth/google/callback
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
        res.redirect('/dashboard')
    })

// @desc Logout User
// @route /auth/logout
router.get('/logout', (req, res) => {
    req.logout() //since we are using passport it provides this logout method in request
    res.redirect('/')
})
module.exports = router