const express = require("express");
const app = express.Router();

const Joi = require("joi");
const { authClub } = require("../../middleware/auth");
const { outError } = require("../../utility/errors");
const { Space } = require("../../db");

/**
 * @path /api/spaces
 */
app.post("/", authClub, async (req, res) => {
    const club = req.club._id;

    const schema = Joi.object().keys({
        sport: Joi.string().required(),
        name: Joi.string().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        const space = (await new Space({ club, ...data }).save()).toObject();
        
        return res.status(201).json({ ...space });
    } catch (error) {
        return outError(res, { error });
    }
});

/**
 * @path /api/spaces/:club_id
 */
app.get("/:club_id", async (req, res) => {
    const club = req.params.club_id;
    const sport = req.query.sport;

    const findObj = {};

    if(sport) findObj.sport = sport;

    try {
        const spaces = await Space.find({ club, ...findObj }, null, { lean: true }).populate("sport").populate({ path: "club", select: "name" });

        return res.status(200).json(spaces);
    } catch (error) {
        return outError(res, { error });
    }
})

module.exports = app