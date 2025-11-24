const pool = require("../config");

async function setup() {
    let queryDelete = `DROP TABLE IF EXISTS "Beans" CASCADE`

    let queryBeans = `CREATE TABLE IF NOT EXISTS "Beans" (
                        id SERIAL PRIMARY KEY,
                        name VARCHAR NOT NULL,
                        description TEXT,
                        price NUMERIC(10,2)
                        )`

    await pool.query(queryDelete)
    console.log("Successfully Delete Beans Table");

    await pool.query(queryBeans)
    console.log("Successfully Create Beans Table")
}

module.exports = setup