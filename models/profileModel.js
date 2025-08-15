db = require('./db');

exports.getUserByUsername = async (username) => {
    return await db.query('SELECT * FROM users WHERE username = ?',
        [ username ]
    )
}