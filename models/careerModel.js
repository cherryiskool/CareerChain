db = require('./db');
const bcrypt = require('bcrypt');

exports.registerUserToDatabase = async (username, password, walletAddress) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await db.query('INSERT INTO users (username, hashedPassword, walletAddress, pfp) \
        VALUES (?, ?, ?, "Default_pfp.jpg")', [
            username, 
            hashedPassword,
            walletAddress
        ]);
}