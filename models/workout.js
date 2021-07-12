const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercise: [
    {
      type: {

        type: String,
        trim: true,
        required: "Enter type of workout"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter name of workout"
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    }
  ]
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
