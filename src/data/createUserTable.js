import pool from "../config/db.js";

const createUserTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
    )
    `;
  try {
    pool.query(queryText);
    console.log("User Table Created If Not Existed");
  } catch (error) {
    console.log("Error creating user Table : ", error);
  }
};

export default createUserTable;
