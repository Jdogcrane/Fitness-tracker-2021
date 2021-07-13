const db = require("../models/index")

module.exports = function (app) {
  // gets all info from api route objects
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
      res.json(dbWorkout);
    })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  // gets all info from api route with range
  app.get("/api/workouts/range", ({ }, res) => {
    db.Workout.find({}).then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
      });
  });
  // creates and submits workout to workouts api
  app.post("/api/workouts/", (req, res) => {
    db.Workout.create(req.body).then((dbWorkout) => {
      res.json(dbWorkout);
    })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  // Finds id of workouts and updates it with data
  app.put("/api/workout/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      {
        _id: req.params.id
      },
      {
        exercises: req.body
      }
    ).then((dbWorkout) => {
      res.json(dbWorkout);
    })
      .catch(err => {
        res.status(400).json(err);
      });
  });

};
