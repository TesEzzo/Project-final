const express = require("express");
const app = express.Router();

const Joi = require("joi");
const { authClub } = require("../../middleware/auth");
const { outError } = require("../../utility/errors");
const { Sport } = require("../../db");

/**
 * @path /api/sports
 */
app.get("/", async (_, res) => {
    try {
        const sports = await Sport.find({}, null, { lean: true });

        return res.status(200).json(sports);
    } catch (error) {
        return outError(res, { error });
    }
});

module.exports = app