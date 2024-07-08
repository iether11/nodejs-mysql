const { pool } = require("./db");
const { v4: uuid } = require("uuid");

const getAllWorkouts = async () => {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM workouts");
    //console.log("Resultados de la consulta:", rows);
    return rows;
  } catch (error) {
    console.error("Error al realizar la consulta:", error);
    throw error; // Re-lanzar el error para que sea manejado por el código que llama a esta función
  }
};

const createWorkout = async (workout) => {
  const data = {
    ...workout,
  };

  const query = "INSERT INTO workouts SET ?";
  pool.query(query, data, (error, results) => {
    if (error) {
      console.error("Error al realizar el INSERT:", error);
      return;
    }
    console.log(
      "INSERT realizado con éxito, ID del nuevo registro:",
      results.insertId
    );
  });
  return data;
};

const addTimestampFields = async (tableName) => {
  try {
    // Construir la consulta SQL para agregar los campos createdAt y updatedAt
    const query = `
      ALTER TABLE ${tableName}
      ADD COLUMN createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      ADD COLUMN updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
    `;
    const [result] = await pool.query(query);
    console.log(
      `Campos createdAt y updatedAt agregados a la tabla ${tableName} correctamente`
    );
    return result;
  } catch (error) {
    console.error(`Error al agregar campos a la tabla ${tableName}:`, error);
    throw error;
  }
};

const getWorkoutById = async (workoutId) => {
  try {
    const [rows, fields] = await pool.query(
      "SELECT * FROM workouts WHERE exercise_id =?",
      [workoutId]
    );
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  } catch (error) {
    console.error("Error al realizar la consulta:", error);
    throw error; // Re-lanzar el error para que sea manejado por el código que llama a esta función
  }
};

module.exports = {
  getAllWorkouts,
  createWorkout,
  getWorkoutById,
};
