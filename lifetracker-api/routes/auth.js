const express = require("express");
const User = require("../models/user");
const router = new express.Router();
const user = require("../models/user")
const { createUserJwt } = require("../utils/tokens");
const security = require("../middleware/security");



router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body)
    const user = await User.login(req.body); // take the users email and password and attempting to authenticate them
    console.log(user)
    const token = createUserJwt(user);
    return res.status(200).json({ user, token });
  } catch (err) {
    return next(err);
  }
});
router.post("/register", async (req, res, next) => {
  try {
    const user = await User.register({ ...req.body, isAdmin: false });
    const token = createUserJwt(user);
    return res.status(200).json({ user, token });
  } catch (err) {
    return next(err);
  }
});

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    //take users email and password and authenticate them
    const { email } = res.locals.user;
    const user = await User.getUserByEmail(email);
    const publicUser = User.makeUser(user);
    // const user = await User.getUserByEmail(req.body.email);
    // const publicUser = User.makeUser(user);
    return res.status(200).json({ user: publicUser });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;



/*

"use strict"



const express = require("express")
const User = require("../models/user")
const router = express.Router()

router.post("/login", async function (req, res, next) {
  try {
    const user = await User.authenticate(req.body)
    return res.status(200).json({ user })
  } catch (err) {
    next(err)
  }
})

router.post("/register", async function (req, res, next) {
  try {
    const user = await User.register(req.body)
    return res.status(201).json({ user })
  } catch (err) {
    next(err)
  }
})

module.exports = router

*/