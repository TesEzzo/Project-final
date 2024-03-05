const express = require("express");
const app = express.Router();

const Joi = require("joi");
const bcrypt = require("bcryptjs");

const { User } = require("../../db");
const { outError } = require("../../utility/errors");
const { authUser } = require("../../middleware/auth");

/**
 * @path /api/users
 */
app.get("/", async (req, res) => {
  const schema = Joi.object().keys({ 
    page: Joi.number().optional().default(1),
    limit: Joi.number().optional().default(10),
  })

  try {
    const data = await schema.validateAsync(req.query);

    const users = await User.paginate({}, {
      page: data.page,
      limit: data.limit,
      select: "-password",
      lean: true
    });

    return res.status(200).json({
      ...users
    });
  } catch (error) {
    return outError(res, {error});
  }  
});

/**
 * @path /api/users/:user_id
 */
app.get("/:user_id", async (req, res) => {
  const user_id = req.params.user_id;
  
  try {
    const user = await User.findOne({ _id: user_id }, "-password", { lean: true });

    return res.status(200).json(user);
  } catch (error) {
    return outError(res, { error })
  }  
});

/**
 * @path /api/users
 */
app.post("/", async (req, res) => {
  const schema = Joi.object().keys({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).alphanum().required(),
    profile_img: Joi.string().optional(),
  });

  try {
    const data = await schema.validateAsync(req.body);

    data.password = bcrypt.hashSync(data.password);

    const user = await new User(data).save();

    const { password, ...userInfo } = user.toObject();

    return res.status(201).json({
      ...userInfo
    });
  } catch (error) {
    return outError(res, { error });
  }
});

/**
 * @path /api/users
 */
app.put("/", authUser, async (req, res) => {
  const user_id = req.user._id;

  const schema = Joi.object().keys({
    first_name: Joi.string().optional(),
    last_name: Joi.string().optional(),
    profile_img: Joi.string().optional(),
  });

  try {
    const data = await schema.validateAsync(req.body);

    await User.updateOne({ _id: user_id }, data);

    return res.status(200).json({
      message: "user updated",
    });
  } catch (error) {
    return outError(res, { error });
  }
});

/**
 * @path /api/users
 */
app.delete("/", authUser, async (req, res) => {
  const user_id = req.user._id;

  try {
    await User.deleteOne({ _id: user_id });

    return res.status(200).json({
      message: "user deleted",
    });
  } catch (error) {
    return outError(res, { error });
  }
});

module.exports = app;