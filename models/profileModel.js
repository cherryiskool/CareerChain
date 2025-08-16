db = require('./db');

exports.getUserByUsername = async (username) => {
    return await db.query('SELECT * FROM users WHERE username = ?',
        [ username ]
    )
}

exports.updateUserContractAddress = async (contractAddress, userId) => {
    return await db.query('UPDATE users SET users.contractAddress = ? WHERE users.id = ?',
        [ contractAddress, userId ]
    )
}