const fs = require('fs');

module.exports = function loadFile(filename, callback) {
    fs.readFile(filename, function (err, data) {
        if (err) {
            throw err;
        }
        callback(data.toString())
    });
}
