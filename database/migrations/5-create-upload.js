const pool = require("../config");

async function setup() {
    let queryDelete = `DROP TABLE IF EXISTS "Upload" CASCADE`

    let queryUpload = `CREATE TABLE IF NOT EXISTS "Upload" (
                        id SERIAL PRIMARY KEY,
                        title VARCHAR NOT NULL,
                        document VARCHAR NOT NULL,
                        author VARCHAR NOT NULL
                        )`

    await pool.query(queryDelete)
    console.log("Successfully Delete Upload Table");
    await pool.query(queryUpload)
    console.log("Successfully Create Upload Table")
}

module.exports = setup