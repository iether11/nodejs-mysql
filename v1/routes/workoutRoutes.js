const router = require("express").Router();
const workoutController = require("../../controllers/workoutcontroller");
router
  .get("/", workoutController.getAllWorkouts)

  .get("/:workoutId", workoutController.getWorkoutById)
  .post("/", workoutController.createWorkout);


module.exports = router;
