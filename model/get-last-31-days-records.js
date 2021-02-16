const dbQueryLocal = require('./db-local').dbQuery;
const dbQuery = require('./db-eco').dbQuery;
const getDiff = require('../controller/local-eco-difference');

const last31daysSqlString = require('./form-31-day-string');
const { getLastDayString, getLastDayHourString, getMonthAgoFirstHourString, getCurrentDayFirstHourString } = require('../get-last-date-strings');

module.exports = async () => {
    let answerLocal, answerEco;
    const ecoLocalDiff = { count: 0, data: [] }

    try {
        answerLocal = (await dbQueryLocal(last31daysSqlString("eco2.hr3", getMonthAgoFirstHourString(), getCurrentDayFirstHourString()))).rows;
        answerEco = (await dbQuery(last31daysSqlString("eco.hourseco1", getMonthAgoFirstHourString(), getCurrentDayFirstHourString()))).rows;
        // console.log("answerLocal.filter  - ", answerLocal.filter(h=>h[1]=='2021-01-12T06:00:00.000Z'));
        if (answerLocal.length > answerEco.length) {
            const _diff = getDiff(answerLocal, answerEco);
            // console.log("_diff - ", _diff);

            ecoLocalDiff.data = [..._diff];

            ecoLocalDiff.count = ecoLocalDiff.data.length;

            if (ecoLocalDiff.count > 0) {

            }
        }
    } catch (error) {
        console.log("31days query error ", error)

    } finally {
        // console.log("####answerLocal - ", answerLocal.length, answerLocal[0])
        // console.log("####answerEco - ", answerEco.length, answerEco[0])
        // console.log("####EcoLocalDiff - ", ecoLocalDiff.count)
        // console.log("####EcoLocalDiff - ", ecoLocalDiff.count, ecoLocalDiff.data)
        return ecoLocalDiff
    }
}