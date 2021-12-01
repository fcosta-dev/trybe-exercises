const crypto = require('crypto');

const token = crypto.randomBytes(8).toString('hex');

module.exports = token;
