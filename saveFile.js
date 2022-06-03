module.exports = function saveFile(filename, message) {
    const fs = require('fs');
    fs.writeFile(filename, message, function (err) {
        if (err) {
            return console.log(err);
        }
        callback(message)
    });
}
