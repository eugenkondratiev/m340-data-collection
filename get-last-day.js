
function getLastDayString() {
    const _dt = (new Date(new Date() - 24 * 3600000)).toLocaleDateString("ru-UA",{year:"numeric",month:"2-digit", day: "2-digit"});
    return `${_dt.slice(6)}-${_dt.slice(3,5)}-${_dt.slice(0,2)}`
}
function getCurrentDayString() {
    return (new Date()).toLocaleString().slice(0, 10).replace(/\./g,'-');
}

function getHourString(_lastDay) {
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
    getCurrentDayHourString: getCurrentDayHourString
}





