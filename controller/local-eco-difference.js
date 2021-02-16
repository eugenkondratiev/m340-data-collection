const DATE_TIME_INDEX = 1;
module.exports = (_local, _eco) => {

    // console.log("_local ", _local.length, _eco.length)
    // console.log("_local 2", _local)

    const resp = _local.filter((localHour) => !_eco.some((ecoHour) => ecoHour[DATE_TIME_INDEX].getTime() == localHour[DATE_TIME_INDEX].getTime())
        // if (isMissingHour) console.log(localHour)

    )
    // console.log("DATE_TIME_INDEX ", DATE_TIME_INDEX)
    // console.log("resp ", resp.length, resp)

    return resp;
}