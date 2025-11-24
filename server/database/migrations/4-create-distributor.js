const pool = require("../config");

async function setup() {
    let queryDelete = `DROP TABLE IF EXISTS "Distributors" CASCADE`

    let queryDistributor = `CREATE TABLE IF NOT EXISTS "Distributors" (
                        id SERIAL PRIMARY KEY,
                        name VARCHAR NOT NULL,
                        city VARCHAR NOT NULL,
                        state VARCHAR,
                        country VARCHAR NOT NULL,
                        phone VARCHAR NOT NULL,
                        email VARCHAR NOT NULL
                        )`

    await pool.query(queryDelete)
    console.log("Successfully Delete Distributors Table");
    await pool.query(queryDistributor)
    console.log("Successfully Create Distributors Table")
}

module.exports = setup