const pool = require("../config");
const path = require("path");
const fs = require('fs').promises

async function seed() {
    const filePath = path.join(__dirname, "../../data/beans.json");
    const beansJson = await fs.readFile(filePath, "utf-8");
    let beansParsed = JSON.parse(beansJson)
    let query = `INSERT INTO "Beans" (name, description, price) VALUES \n`
    let beans = beansParsed.map(bean => {
        return `('${bean.name}', '${bean.description.replace(/'/g, "''")}', ${bean.price})`
    }).join(", \n")

    query += beans

    await pool.query(query)
    console.log("Successfully insert into Beans table");
}

module.exports = seed
