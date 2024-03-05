const express = require("express");
const { authUser, authClub } = require("../../middleware/auth");
const app = express.Router();

/**
 * @path /api/me/users
 */
app.get("/users", authUser, (req, res) => {
    return res.status(200).json({ ...req.user });
});

/**
 * @path /api/me/clubs
 */
app.get("/clubs", authClub, (req, res) => {
    return res.status(200).json({ ...req.club });
});

module.exports = app;