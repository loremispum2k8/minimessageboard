const {Pool} = require('pg')
require('dotenv').config()

module.exports = new Pool({
    host: "localhost",
    user: process.env.USER,
    database: "top_users",
    password: process.env.PASSWORD,
    port: 5432
})