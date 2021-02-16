
function getLastDayString() {
    const _dt = (new Date(new Date() - 24 * 3600000)).toLocaleDateString("ru-UA",{year:"numeric",month:"2-digit", day: "2-digit"});
    return `${_dt.slice(6)}-${_dt.slice(3,5)}-${_dt.slice(0,2)}`
}

function getMonthAgoString() {
    const _dt = (new Date(new Date() - 31*24 * 3600000)).toLocaleDateString("ru-UA",{year:"numeric",month:"2-digit", day: "2-digit"});
    return `${_dt.slice(6)}-${_dt.slice(3,5)}-${_dt.slice(0,2)}`
}

function getMonthAgoFirstHourString() {
    return `${getMonthAgoString()} 08:00:00`
}

function getCurrentDayFirstHourString() {
    return `${getCurrentDayString()} 08:00:00`
}

function getCurrentDayString() {
    const _dt = (new Date()).toLocaleDateString("ru-UA",{year:"numeric",month:"2-digit", day: "2-digit"});
    return `${_dt.slice(6)}-${_dt.slice(3,5)}-${_dt.slice(0,2)}`
    // return (new Date()).toLocaleString().slice(0, 10).replace(/\./g,'-');
}

function getHourString(_lastDay = 0) {
    // console.log(_lastDay);

    return _hour => {
        return `${_lastDay} ${_hour > 9 ? _hour : "0" + _hour}:00:00`
    }
}
const getLastDayHourString = getHourString(getLastDayString());
const getCurrentDayHourString = getHourString(getCurrentDayString());

module.exports = {
    getLastDayHourString: getLastDayHourString,
    getLastDayString: getLastDayString,
    getCurrentDayHourString: getCurrentDayHourString,
    getMonthAgoString:getMonthAgoString,
    getMonthAgoFirstHourString:getMonthAgoFirstHourString,
    getCurrentDayFirstHourString:getCurrentDayFirstHourString
}






