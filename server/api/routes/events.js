const express = require("express");
const app = express.Router();

const Joi = require("joi");

const { Event, Club, Space, Sport } = require("../../db");
const { outError } = require("../../utility/errors");
const { getDateFromString } = require("../../utility/dates");
const { authUser } = require("../../middleware/auth");

/**
 * @path /api/events
 */
app.post("/", authUser, async (req, res) => {
    const user = req.user;

    const schema = Joi.object().keys({
        club: Joi.string().required(), // sarà l'id del club
        space: Joi.string().required(), // sarà l'id dello space
        sport: Joi.string().required(), // sarà l'id dello sport
        players_max_count: Joi.number().required(),
        start_date: Joi.date().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        data.players = [user._id];

        const sport = await Sport.findOne({ _id: data.sport }, "players slot_time", { lean: true });

        if(sport.players.indexOf(data.players_max_count) === -1) {
            return res.status(400).json({ message: "invalid players max count" });
        }

        const end_date = sport.slot_time === 30 ? new Date(data.start_date).getTime() + 5400000 : new Date(data.start_date).getTime() + 3600000;

        data.end_date = new Date(end_date);
        
        const event = (await new Event(data).save()).toObject();

        return res.status(201).json({
            ...event
        });
    } catch (error) {
        return outError(res, { error });
    }
});

/**
 * @path /api/events/:space_id?date=<Date>&sport=<ObjectId>
 */
app.get("/:space_id", async (req, res) => {
    const space_id = req.params.space_id;
    const sport_id = req.query.sport;

    try {
        const start_date = getDateFromString(req.query.date);
        start_date.setHours(0, 0, 0, 0);
        const end_date = getDateFromString(req.query.date);
        end_date.setHours(23, 59, 59, 999);

        const events = await Event.find({
            space: space_id,
            start_date: {
                $gte: start_date,
            },
            end_date: {
                $lte: end_date,
            },
        }, null, { lean: true }).populate({ path: "club", select: "name" }).populate("sport").populate("space");

        const space = await Space.findOne({ _id: space_id }, null, { lean: true });
        const sport = await Sport.findOne({ _id: sport_id }, null, { lean: true });

        const { opening_hours } = space;
        const { slot_time } = sport;

        start_date.setHours(opening_hours.start, 0, 0, 0);

        const event_slot_count = slot_time === 30 ? ((opening_hours.end - opening_hours.start) * 2) : opening_hours.end - opening_hours.start;

        const event_slots = [{start_date, is_free: true}];

        while(event_slots.length < event_slot_count) {
            const temp_event_slot = event_slots.at(-1).start_date;
            const time = slot_time === 30 ? new Date(temp_event_slot).getTime() + 1800000 : new Date(temp_event_slot).getTime() + 3600000;
            event_slots.push({
                start_date: new Date(time),
                is_free: true
            });
        }

        const final_event_slots = event_slots.filter(slot => {
            return !events.find(event => {
                return slot_time === 30 ? 
                    (new Date(slot.start_date).getTime() >= new Date(event.start_date).getTime() - 5400000 && new Date(slot.start_date).getTime() < new Date(event.end_date).getTime())
                    :
                    (new Date(slot.start_date).getTime() >= new Date(event.start_date).getTime() && new Date(slot.start_date).getTime() < new Date(event.end_date).getTime())
            })
        });

        const all_event_slots = [...final_event_slots, ...events].map(e => {
            e.is_free = e.is_free !== undefined;
            return e;
        }).sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime());

        return res.status(200).json(all_event_slots);
    } catch (error) {
        return outError(res, { error });
    }
});

/**
 * @path /api/events/club/:club_id
 */
app.get("/club/:club_id", async (req, res) => {
    const clubId = req.params.club_id;
    const club = await Club.findById(clubId);

    try {

        if (!club) {
            return res.status(404).json({ error: "Club non trovato" });
        }
        const events = await Event.find({ club: clubId }).populate("space").populate("sport").lean();
        return res.status(200).json(events);

    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = app;