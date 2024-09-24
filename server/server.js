const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
    origin: ["http://localhost:5713"],
}
app.use(cors(corsOptions));
app.get("/api", (req, res)=> {
    res.json("HEllo");
});

app.listen(8080, ()=> {
    console.log("Server running on port 8080");9
})