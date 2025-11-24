const pool = require("../config");

async function setup() {
    let queryDelete = `DROP TABLE IF EXISTS "Distributor" CASCADE`

    let queryDistributor = `CREATE TABLE IF NOT EXISTS "Distributor" (
                        id SERIAL PRIMARY KEY,
                        distributor_name VARCHAR NOT NULL,
                        city VARCHAR NOT NULL,
                        state VARCHAR,
                        country VARCHAR NOT NULL,
                        phone VARCHAR NOT NULL,
                        email VARCHAR NOT NULL
                        )`

    await pool.query(queryDelete)
    console.log("Successfully Delete Distributor Table");
    await pool.query(queryDistributor)
    console.log("Successfully Create Distributor Table")
}

module.exports = setup