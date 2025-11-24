const pool = require("../config");
const path = require("path");
const fs = require('fs').promises

async function seed() {
    const filePath = path.join(__dirname, "../../data/users.json");
    const usersJson = await fs.readFile(filePath, "utf-8");
    let usersParsed = JSON.parse(usersJson)
    let query = `INSERT INTO "Users" (userId, password) VALUES \n`
    let users = usersParsed.map(user => {
        return `('${user.userId}', '${user.password}')`
    }).join(", \n")

    query += users

    await pool.query(query)
    console.log("Successfully insert into Users table");
}

module.exports = seed
