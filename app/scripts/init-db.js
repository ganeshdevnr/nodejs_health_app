// load the environment files
require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const init = async () => {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS client_logs (
            id SERIAL PRIMARY KEY,
            ip_address VARCHAR(255),
            requested_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `);

  console.log("Table created or already exists.");
  await pool.end();
};

init().catch((err) => {
  console.error("error creating table:", err);
  process.exit(1);
});
