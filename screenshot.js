const puppeteer = require("puppeteer-extra");
puppeteer.use(require("puppeteer-extra-plugin-stealth")());
const pageCmd = require('./pageCmd.js');

//console.log(process.argv);
const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

// START
(async () => {

    for (const url of myArgs) {
        console.log(url);

        try {
            let command_obj = [
                { cmd: 'goto', val: url },
                { cmd: 'screenshot', val: url.toLowerCase().replace(/[^a-z0-9]+/g,'-') + '.png' }
            ];
            //console.log(command_obj);
            await pageCmd(command_obj);
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
    }

})();
