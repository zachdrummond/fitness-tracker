const express = require("express");
const path = require("path");
const router = express.Router();
const db = require("../models");

// VIEW ROUTES
router.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", function (request, response) {
  response.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", function (request, response) {
  response.sendFile(path.join(__dirname, "../public/stats.html"));
});

// API ROUTES
// Get Last Workout
router.get("/api/workouts", function (request, response) {
});

// Get Workouts in Range
router.get("/api/workouts/range", function (request, response) {
});

// Add a New Workout
router.post("/api/workouts", function (request, response) {
  db.Workout.create(request.body)
    .then((newWorkout) => {
      response.json(newWorkout);
    })
    .catch((error) => {
      console.log(error);
      response.json({
        error: true,
        data: null,
        message: "Failed to create a new workout.",
      });
    });
});

// Update / Add a New Exercise
router.put("/api/workouts/:id", function (request, response) {
});

module.exports = router;
