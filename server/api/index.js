const express = require("express");
const app = express.Router();

/**
 * @path /api/users
 */
app.use("/users", require("./routes/users"));

/**
 * @path /api/clubs
 */
app.use("/clubs", require("./routes/clubs"));

/**
 * @path /api/me
 */
app.use("/me", require("./routes/me"));

/**
 * @path /api/spaces
 */
app.use("/spaces", require("./routes/spaces"));

/**
 * @path /api/sports
 */
app.use("/sports", require("./routes/sports"));

/**
 * @path /api/events
 */
app.use("/events", require("./routes/events"));

module.exports = app;