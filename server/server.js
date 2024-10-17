const express = require("express");
const app = express();
const cors = require("cors");
const { Pool } = require("pg");
require('dotenv').config();

const port = process.env.PORT;
const domain = "localhost:8080/"
// setting up the express server to use locahost:5713
const corsOptions = {
    origin: ["http://localhost:5173"],
}
// using the middleware
app.use(cors(corsOptions));
app.use(express.json()); // To parse JSON bodies

// PostgreSQL pool setup
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});
pool.connect((err) => {
    if (err) {
        console.error('Database connection error:', err.stack);
    } else {
        console.log('Connected to PostgreSQL database');
    }
});

app.get("/api/tasks/first", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [1]);
        const firstTask = result.rows[0];

        if (firstTask) {
            console.log('First task:', firstTask); // Log the first row to the console
            res.json(firstTask); // Optional: send the task data back to the client
        } else {
            console.log('No tasks found');
            res.status(404).json({ message: 'No tasks found' });
        }
    } catch (error) {
        console.error('Error fetching task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// server to listen too
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})