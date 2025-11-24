const pool = require("../config");

async function setup() {
    let queryDelete = `DROP TABLE IF EXISTS "Users" CASCADE`

    let queryUsers = `CREATE TABLE IF NOT EXISTS "Users" (
                        id SERIAL PRIMARY KEY,
                        userId VARCHAR NOT NULL UNIQUE,
                        password VARCHAR NOT NULL
                        )`

    await pool.query(queryDelete)
    console.log("Successfully Delete Users Table");

    await pool.query(queryUsers)
    console.log("Successfully Create Users Table")
}

module.exports = setup