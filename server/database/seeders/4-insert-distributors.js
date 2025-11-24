const pool = require("../config");
const path = require("path");
const fs = require('fs').promises

async function seed() {
    const filePath = path.join(__dirname, "../../data/distributors.json");
    const distributorsJson = await fs.readFile(filePath, "utf-8");
    let distributorsParsed = JSON.parse(distributorsJson)
    let query = `INSERT INTO "Distributors" (name, city, state, country, phone, email) VALUES \n`
    let distributors = distributorsParsed.map(dist => {
        return `('${dist.name.replace(/'/g, "''")}', '${dist.city.replace(/'/g, "''")}', '${dist.state.replace(/'/g, "''")}', '${dist.country.replace(/'/g, "''")}', '${dist.phone.replace(/'/g, "''")}', '${dist.email.replace(/'/g, "''")}')`
    }).join(", \n")

    query += distributors

    await pool.query(query)
    console.log("Successfully insert into Distributors table");
}

module.exports = seed
