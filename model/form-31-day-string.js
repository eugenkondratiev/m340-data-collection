module.exports = (table, from, to) => {
    return `SELECT * from ${table} where dt >= '${from}' and dt <= '${to}'`
    //return `SELECT count(dt) from ${table} where dt >= "${from}" and dt <= "${to}" order by dt desc`
}
