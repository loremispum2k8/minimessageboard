const pool = require('./pool')

async function getAllUsers(){
    const {rows} = await pool.query('SELECT * FROM usernames')
    return rows
}

async function insertUsername(username){
    await pool.query('INSERT INTO usernames (username) VALUES ($1)',[username])
}

async function deleteAllUsers(){
    await pool.query('TRUNCATE TABLE usernames')
}

async function searchUsers(searchQuery){
    const {rows} = await pool.query("SELECT * FROM usernames WHERE username LIKE $1",[`%${searchQuery}%`])
    return rows
}

module.exports = {
    getAllUsers,
    insertUsername,
    deleteAllUsers,
    searchUsers
}