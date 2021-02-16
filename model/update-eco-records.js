const dbQuery = require('./db-eco').dbQuery;
const UPDATE_ECO1_SQL = "INSERT IGNORE INTO eco.hourseco1 (`dt`, `Q_39`, `T_41`, `T_42`, `P_19`, `P_18`, `P_36`, `T_10`, `T_6`, `T_7`, `T_4`, `W_38`) VALUES ? "

module.exports = async (records) => {
    console.log("####update-records  - ", records, records instanceof Array);

    const removeDtColumn = ([dt, ...rest]) => rest;
    const recordsForUpdate = records.map(removeDtColumn);

    let resp
    try {
        resp = await dbQuery(UPDATE_ECO1_SQL, recordsForUpdate);
    } catch (err) {
        return { error: err }
    } finally {
        return { done: records.length }
    }

}