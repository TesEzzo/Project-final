/**
 * format date from string to istance of Date.
 * @param {string} str date string in format: `dd-mm-yyyy`
 * @returns {Date}
 */
const getDateFromString = (str) => {
    if(!str.match(/([0-9]{2})(\-)([0-9]{2})(\-)([0-9]{4})/ig)) {
        throw new Error("invalid date format");
    }

    const a = str.split("-");
    return new Date(a[2], a[1] -1, a[0]);
}

module.exports = {
    getDateFromString
}