const GoogleStrategyy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')


module.exports = function (passport) {
    passport.use(new GoogleStrategyy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
    },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile)
            const newUser = {
                googleId: profile.id,
                displayName: profile.displayName,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName ? profile.name.familyName : 'no name',
                image: profile.photos[0].value
            }
            try {
                let user = await User.findOne({ googleId: profile.id })
                if (user) {
                    done(null, user)
                } else {
                    user = await User.create(newUser)
                    done(null, user)
                }
            } catch (err) {
                console.log(err)
            }
        }))

    passport.serializeUser((user, done) => {
        done(null, user.id);
    })
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    })

}