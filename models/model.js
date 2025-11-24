const pool = require("../database/config");
const { compare } = require("../helpers/bcrypt");

class Model {
    static async login({ userId, password }) {
        try {
            const query = `SELECT * FROM "Users" WHERE userId = $1`;
            const result = await pool.query(query, [userId]);

            if (result.rows.length === 0 || !compare(password, result.rows[0].password)) {
                throw { name: "Unauthorized" };
            }

            const user = {
                id: result.rows[0].id,
                userId: result.rows[0].userId
            }

            return user;
        } catch (error) {
            throw error;
        }
    }

    static async getAllBeans() {
        try {
            const query = `SELECT * FROM "Beans"`
            const result = await pool.query(query)
            return result.rows
        } catch (error) {
            throw error
        }
    }

    static async getBeanById(id) {
        try {
            const query = `SELECT * FROM "Beans" WHERE id = $1`
            const result = await pool.query(query, [id])
            return result.rows[0]
        } catch (error) {
            throw error
        }
    }

    static async getBeanOfTheDay() {
        try {
            const query = `SELECT b.name, b.description, db.sale_price
                            FROM "DailyBean" db
                            JOIN "Beans" b ON db.bean_id = b.id
                            WHERE db.date = CURRENT_DATE AND db.sale_price >= 0.00
                            LIMIT 1`

            const result = await pool.query(query)
            return result.rows[0]
        } catch (error) {
            throw error
        }
    }

    static async getAllDistributors() {
        try {
            const query = `SELECT * FROM "Distributors"`
            const result = await pool.query(query)
            return result.rows
        } catch (error) {
            throw error
        }
    }

    static async getDistributorById(id) {
        try {
            const query = `SELECT * FROM "Distributors" WHERE id = $1`
            const result = await pool.query(query, [id])
            return result.rows[0]
        } catch (error) {
            throw error
        }
    }

    static async createDistributor({ name, city, state, country, phone, email }) {
        try {
            const query = `INSERT INTO "Distributors" (name, city, state, country, phone, email)
                           VALUES ($1, $2, $3, $4, $5, $6)
                           RETURNING *`
            const values = [name, city, state, country, phone, email]
            const result = await pool.query(query, values)
            return result.rows[0]
        } catch (error) {
            throw error
        }
    }

    static async updateDistributor(id, { name, city, state, country, phone, email }) {
        try {
            const query = `UPDATE "Distributors"
                           SET name = $1, city = $2, state = $3, country = $4, phone = $5, email = $6
                           WHERE id = $7
                           RETURNING *`
            const values = [name, city, state, country, phone, email, id]
            const result = await pool.query(query, values)
            return result.rows[0]
        } catch (error) {
            throw error
        }
    }

    static async createUpload({ title, document, author }) {
        try {
            const query = `INSERT INTO "Upload" (title, document, author)
                           VALUES ($1, $2, $3)
                           RETURNING *`
            const values = [title, document, author]
            const result = await pool.query(query, values)
            return result.rows[0]
        } catch (error) {
            throw error
        }
    }
}

module.exports = Model;