const express = require("express");
const app = express.Router();

const Joi = require("joi");
const bcrypt = require("bcryptjs");

const { Club } = require("../../db");
const { outError } = require("../../utility/errors");

const { getCoordsFromAddress } = require("../../utility/address");

/**
 * @path /api/clubs
 */
app.get("/", async (req, res) => {
  const schema = Joi.object().keys({ 
    page: Joi.number().optional().default(1),
    limit: Joi.number().optional().default(10),
  })

  try {
    const data = await schema.validateAsync(req.query);

    const clubs = await Club.paginate({}, {
      page: data.page,
      limit: data.limit,
      select: "-password",
      lean: true
    });

    return res.status(200).json({
      ...clubs
    });
  } catch (error) {
    return outError(res, {error});
  }  
});

/**
 * @path /api/clubs/:club_id
 */
app.get("/:club_id", async (req, res) => {
  const club_id = req.params.club_id;
  
  try {
    const club = await Club.findOne({ _id: club_id }, "-password", { lean: true }).populate({
        path: "info",
        populate: {
            path: "sports",
        }
    });

    return res.status(200).json(club);
  } catch (error) {
    return outError(res, { error })
  }  
});

/**
 * @path /api/clubs
 */
app.post("/", async (req, res) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).alphanum().required(),
    owner: Joi.object().keys({
        first_name: Joi.string().optional(),
        last_name: Joi.string().optional(),
    }).optional(),
    info: Joi.object().keys({
        description: Joi.string().optional(),
        logo: Joi.string().optional(),
        cover: Joi.string().optional(),
        sports: Joi.array().items(Joi.string()).required(),
        opening: Joi.object().keys({
            hours: Joi.string().optional(),
            days: Joi.string().optional(),
        }).optional(),
    }).required(),
    business_info: Joi.object().keys({
        p_iva: Joi.string().required(),
        address: Joi.string().required(),
        city: Joi.string().required(),
        cap: Joi.string().required(),
    }).required(),
    location: Joi.object().keys({
        address: Joi.string().required(),
        num: Joi.string().required(),
        city: Joi.string().required(),
        cap: Joi.string().required(),
        coordinates: Joi.object().keys({
            lat: Joi.string().optional(),
            lon: Joi.string().optional(),
        }).optional().default({
            lat: "",
            lon: "",
        }),
    }).required(),
  });

  try {
    const data = await schema.validateAsync(req.body);

    data.password = bcrypt.hashSync(data.password);

    data.location.coordinates = await getCoordsFromAddress({
      address: data.location.address,
      city: data.location.city,
      num: data.location.num,
      cap: data.location.cap
    });

    const club = await new Club(data).save();

    const { password, ...clubInfo } = club.toObject();

    return res.status(201).json({
      ...clubInfo
    });
  } catch (error) {
    return outError(res, { error });
  }
});

module.exports = app;