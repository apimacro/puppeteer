const puppeteer = require("puppeteer-extra");
puppeteer.use(require("puppeteer-extra-plugin-stealth")());
const fs = require('fs');

const loadFile = require('./loadFile');
const saveFile = require('./saveFile');
const csvToObj = require('./csvToObj.js');
const pageCmd = require('./pageCmd.js');

//console.log(process.argv);
const myArgs = process.argv.slice(2);
//console.log('myArgs: ', myArgs);

// START
(async () => {

    for (const filepath_csv of myArgs) {
        console.log(filepath_csv);
        try {
            // read contents of the file
            if (!fs.existsSync(filepath_csv)) {
                console.log("NOT EXIST");
                continue;
            }
            let data = fs.readFileSync(filepath_csv, 'UTF-8');
            let command_obj = await csvToObj(data);
            //console.log(command_obj);
            await pageCmd(command_obj);
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
    }
    //process.exit(1);

})();