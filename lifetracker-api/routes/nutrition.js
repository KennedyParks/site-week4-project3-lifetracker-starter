const express = require("express");
const Nutrition = require("../models/nutrition");
const router = express.Router();
const security = require("../middleware/security");
const jwt = require("jsonwebtoken");

/**
 * endpoint for creating/ adding new nutrition info
 */
router.post("/", async (req, res, next) => {
  console.log("REQ.BODY--------------", req.body);
  try {
    const user = jwt.verify(req.body.token, "your_secret_key");
    console.log("USER", user)
    const nutrition = await Nutrition.addNutrition(req.body, user.user.email);
    return res.status(201).json(nutrition);
  } catch (err) {
    console.log(err)
    next(err);
  }
});

/**
 * list all nutrition info  list
 */
router.get("/", async (req, res, next) => {
  console.log("REQ.BODY--------------", req.body);
  try {
    const user = jwt.verify(req.body.token, "your_secret_key");
    console.log("USER", user)
    const nutrition = await Nutrition.listAllNutrition(req.body, user.user.email);
    return res.status(201).json(nutrition);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
