const express = require('express');
const passport = require('../../authentication/passportLocal');
const authHelpers = require('../../authentication/authHelpers');

const app = express();

// Login Route
app.post(
  '/auth/login',
  passport.authenticate('local', {
    failureRedirect: '/',
    successRedirect: '/home',
    failureFlash: true
  })
);

module.exports = app;