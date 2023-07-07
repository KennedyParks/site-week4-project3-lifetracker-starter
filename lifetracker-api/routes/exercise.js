// const express = require("express");
// const Exercise = require("../models/exercise");
// const router = express.Router();
// const security = require("../middleware/security");
// // const { createUserJwt } = require("../utils/tokens");
// // const { NotFoundError, BadRequestError } = require("../utils/errors");

// /**
//  * endpoint for creating/ adding new exercise
//  */
// router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
//   try {
//     const { user } = res.locals;
//     const exercise = await Exercise.addExercise({ user, data: req.body });
//     console.log("REQ.BODY", exercise);
//     return res.status(201).json(exercise);
//   } catch (err) {
//     next(err);
//   }
// });

// /**
//  * list all exercise
//  */
// router.get("/", async (req, res, next) => {
//   try {
//     const { user } = res.locals;
//     const exercises = await Exercise.listAllExercise(user);
//     return res.status(201).json(exercises);
//   } catch (err) {
//     console.log("BIG FAT ERRORRR", err);
//     next(err);
//   }
// });

// module.exports = router;