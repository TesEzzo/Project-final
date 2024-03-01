const express = require("express");
const app = express.Router();

const Joi = require("joi");
const bcrypt = require("bcryptjs");
const { outError } = require("../../utility/errors");
const { generateToken } = require("../../utility/auth");
const { Club } = require("../../db");

/**
 * @path /auth/clubs/token
 */
app.post("/token", async (req, res) => {
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    try {
        const data = await schema.validateAsync(req.body);

        const club = await Club.findOne({ email: data.email, is_active: true }, null, { lean: true });

        if (club === null) {
            return res.status(404).json({ message: "club not found" });
        }

        const is_valid_password = bcrypt.compareSync(data.password, club.password);

        if (!is_valid_password) {
            return res.status(404).json({ message: "club not found" });
        }

        const token = generateToken({ _id: club._id, email: club.email, identity: "club" });

        return res.status(201).json({ token });
    } catch (error) {
        return outError(res, { error });
    }
});

module.exports = app;