import axios from "axios";
import Constants from "../constants";

export const createNewClub = async (data, cb = (error, data) => {}) => {
    try {
        const response = await axios({
            url: `${Constants.API_HOST}/api/clubs`,
            method: "POST",
            data
        });

        if (typeof cb === "function") {
            return cb(null, response.data);
        }
    } catch (error) {
        if (typeof cb === "function") {
            return cb(error, null);
        } else {
            throw error;
        }
    }
}