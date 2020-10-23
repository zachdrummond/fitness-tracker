const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
        },
        name: {
          type: String,
          trim: true,
          required: "Name is required.",
        },
        duration: {
          type: Number,
          required: "Duration is required.",
        },
        weight: {
          type: Number,
          required: "Weight is required.",
        },
        reps: {
          type: Number,
          required: "Reps are required.",
        },
        sets: {
          type: Number,
          required: "Sets is required.",
        },
        distance: {
          type: Number,
          required: "Distance is required.",
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true }
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
