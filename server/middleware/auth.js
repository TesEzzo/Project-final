const { User, Club } = require("../db");
const { verifyToken } = require("../utility/auth");
const { outError } = require("../utility/errors");

const authUser = async (req, res, next) => {
    const token = req.headers?.authorization?.replace("Bearer ", "") || null;

    if (!token) {
        return res.status(403).json({ message: "not authorized-1" });
    }

    try {
        const decoded = verifyToken(token);

        if (!decoded) {
            return res.status(403).json({ message: "not authorized-2" });
        }
   
        const user = await User.findOne({ _id: decoded._id, is_active: true }, "-password", { lean: true });

        if (!user) {
            return res.status(403).json({ message: "not authorized-3" });
        }

        req.user = user;

        return next();
    } catch (error) {
        return outError(res, { error, code: 403, message: "not authorized-4" });
    }
}

const authClub = async (req, res, next) => {
    const token = req.headers?.authorization?.replace("Bearer ", "") || null;

    if (!token) {
        return res.status(403).json({ message: "not authorized" });
    }

    try {
        const decoded = verifyToken(token);

        if (!decoded) {
            return res.status(403).json({ message: "not authorized" });
        }
   
        const club = await Club.findOne({ _id: decoded._id, is_active: true }, "-password", { lean: true });

        if (!club) {
            return res.status(403).json({ message: "not authorized" });
        }

        req.club = club;

        return next();
    } catch (error) {
        return outError(res, { error, code: 403, message: "not authorized" });
    }
}

module.exports = { 
    authUser,
    authClub,
}