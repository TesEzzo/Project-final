const axios = require('axios');

const formatQuery = (str) => str.replaceAll(",", "").split(/\s+/gm).join("+");

const getCoordsFromAddress = async ({ address, city, num, cap }) => {
    const query = `${formatQuery(address)}+${num}+${formatQuery(city)}+${cap}`;

    try {
        const response = await axios({
            url: `https://nominatim.openstreetmap.org/search?q=${query}&format=json&polygon=1&addressdetails=1`,
        });

        const { lat, lon } = response.data[0];

        return {
            lat,
            lon
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCoordsFromAddress
};