require('dotenv').config();
const authMiddleware = (req, res, next) => {
    const apiKey = req.headers["x-api-key"];
	console.log(apiKey);
    if (!apiKey || apiKey !== process.env.SERVER_PASSWORD) {
        return res.status(403).json({ error: "Forbidden: Invalid API Key" });
    }
    next();
};

module.exports = authMiddleware;
