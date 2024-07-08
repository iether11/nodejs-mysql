const Workout = require("../database/Workout");

const getAllWorkouts = () => {
  try {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
  } catch (error) {
    console.error("Error al obtener todos los workouts:", error);
    res.status(500).json({ error: "Hubo un problema al obtener los workouts" });
  }
};

const createWorkout = (workout) => {
  try {
    const newWorkout = Workout.createWorkout(workout);
    return newWorkout;
  } catch (error) {
    console.error("Error al crear un nuevo workout:", error);
    res.status(500).json({ error: "Hubo un problema al crear el workout" });
  }
};

const getWorkoutById = (workoutId) => {
  try {
    const workout = Workout.getWorkoutById(workoutId);
    return workout;
  } catch (error) {
    console.error("Error al obtener un workout por ID:", error);
    res.status(500).json({ error: "Hubo un problema al obtener el workout" });
  }
}

module.exports = {
  getAllWorkouts,
  createWorkout,
  getWorkoutById,
};
