const express = require("express");
const app = express();
const cors = require("cors");
const { Pool } = require("pg");
require('dotenv').config();

const port = process.env.PORT;
// setting up the express server to use locahost:5713
const corsOptions = {
    origin: ["http://localhost:5713"],
}
// using the middleware
app.use(cors(corsOptions));


app.get("/api", (req, res)=> {
    res.json("HEllo");
});

// server to listen too
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})