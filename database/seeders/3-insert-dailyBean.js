const pool = require("../config");
const path = require("path");
const fs = require('fs').promises

async function seed() {
    const filePath = path.join(__dirname, "../../data/dailyBean.json");
    const dailyBeanJson = await fs.readFile(filePath, "utf-8");
    let dailyBeanParsed = JSON.parse(dailyBeanJson)
    let query = `INSERT INTO "DailyBean" (bean_id, sale_price, date) VALUES \n`
    let dailyBeans = dailyBeanParsed.map(daily => {
        return `(${daily.bean_id}, ${daily.sale_price}, '${daily.date}')`
    }).join(", \n")

    query += dailyBeans

    await pool.query(query)
    console.log("Successfully insert into DailyBean table");
}

module.exports = seed
