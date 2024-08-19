const { getUser } = require('./token');

function auth(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        const payload = getUser(token);
        if (payload.email) {
            req.user = payload.email;
            next();
        } else {
            res.status(401).json({ success: false, message: 'Unauthorized' });
        }
    } else {
        res.status(401).json({ success: false, message: 'Unauthorized' });
    }
}

module.exports = auth;