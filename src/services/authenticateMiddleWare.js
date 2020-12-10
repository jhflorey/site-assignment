

const fs = require('fs');
const usersObject = JSON.parse(fs.readFileSync('./utils/user.json', 'utf8'));

 function verifyToken (req, res, next) {
    let tokenHeader = req.headers['x-access-token'] || req.headers['authorization'];
    
    let isAuthen = {}
    if (typeof tokenHeader == "undefined") {
        return res.status(401).send("Unauthoried");
    } else {
        isAuthen = usersObject.find(el => el.token == tokenHeader);
        if (typeof isAuthen != "undefined"){
            next()
        } else {
            return res.status(401).send("Unauthoried");
        }
    }
}

module.exports = {
    verifyToken
}