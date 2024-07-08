const workoutService = require("../services/workoutService");

const getAllWorkouts = async (req, res) => {
  const allWorkouts = await workoutService.getAllWorkouts();
  try {
    res.status(200).json({ message: "All workouts", data: allWorkouts });
  } catch (error) {
    res.status(500).json({ message: "Failed to get all workouts" });
  }
};

const createWorkout = async (req, res) => {
  try {
    console.log(req.body);
    const newWorkout = await workoutService.createWorkout(req.body);
    res.status(201).json({ message: "Workout created successfully", data: newWorkout });
  } catch (error) {
    console.error('Error al crear el workout:', error);
    res.status(500).json({ message: "Failed to create workout" });
  }
};

const getWorkoutById = async (req, res) => {
  const workoutId = req.params.workoutId;
  try {
    const workout = await workoutService.getWorkoutById(workoutId);
    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.status(200).json({ message: "Workout found", data: workout });
  } catch (error) {
    console.error('Error al obtener el workout:', error);
    res.status(500).json({ message: "Failed to get workout" });
  }
}
  

module.exports = {
  getAllWorkouts,
  createWorkout,
  getWorkoutById,
};
