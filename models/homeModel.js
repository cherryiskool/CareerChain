db = require('./db');

exports.saveNewPostToDatabase = async (postText, userId) => {
    return await db.query('INSERT INTO posts (postText, posterId, dateOfUpload, likes) \
        VALUES (?, ?, NOW(), 0)', [ postText, userId ]);
}

exports.getAllPosts = async () => {
    return await db.query('SELECT users.id as "userId", users.username as "username", \
        users.pfp as "pfp", posts.id as "postId", posts.postText as "postText", \
        posts.dateOfUpload as "dateOfUpload", posts.likes as "likes" \
        FROM users \
        LEFT JOIN posts \
        ON users.id = posts.posterId \
        ORDER BY posts.dateOfUpload \
        DESC');
}

exports.getUsersLikes = async (userId) => {
    return await db.query('SELECT postId from LIKES WHERE userId = ?',
        [ userId ]
    );
}

exports.setLiked = async (userId, postId) => {
    return await db.query('INSERT IGNORE INTO likes (userId, postId) VALUES (?, ?)',
        [ userId, postId ]
    );
}

exports.removeLiked = async (userId, postId) => {
    return await db.query('DELETE FROM likes WHERE userId = ? AND postId = ?',
        [ userId, postId ]
    );
}

exports.addLike = async (postId) => {
    return await db.query('UPDATE posts SET likes = likes + 1 WHERE id = ?',
        [ postId ]
    );
}

exports.removeLike = async (postId) => {
    return await db.query('UPDATE posts SET likes = likes - 1 WHERE id = ?',
        [ postId ]
    );
}