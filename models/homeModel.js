db = require('./db');

exports.saveNewPostToDatabase = async (postText, userId) => {
    return await db.query('INSERT INTO posts (postText, posterId, dateOfUpload) \
        VALUES (?, ?, NOW())', [ postText, userId ]);
}

exports.getAllPosts = async () => {
    return await db.query('SELECT users.id as "userId", users.username as "username", \
        users.pfp as "pfp", posts.id as "postId", posts.postText as "postText", \
        posts.dateOfUpload as "dateOfUpload" \
        FROM users \
        LEFT JOIN posts \
        ON users.id = posts.posterId \
        ORDER BY posts.dateOfUpload \
        DESC')}