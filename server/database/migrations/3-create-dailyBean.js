const pool = require("../config");

async function setup() {
    let queryDelete = `DROP TABLE IF EXISTS "DailyBean" CASCADE`

    let queryDailyBean = `CREATE TABLE IF NOT EXISTS "DailyBean" (
                        id SERIAL PRIMARY KEY,
                        bean_id INTEGER REFERENCES "Beans"(id),
                        sale_price NUMERIC(10,2) NOT NULL,
                        date DATE DEFAULT CURRENT_DATE
                        )`

    await pool.query(queryDelete)
    console.log("Successfully Delete DailyBean Table");

    await pool.query(queryDailyBean)
    console.log("Successfully Create DailyBean Table")
}

module.exports = setup