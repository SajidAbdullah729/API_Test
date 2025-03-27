
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const loggerMiddleware = require("./middlewares/loggerMiddleware");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use("/users", userRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});