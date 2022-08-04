const puppeteer = require("puppeteer-extra");
puppeteer.use(require("puppeteer-extra-plugin-stealth")());
const pageCmd = require('./pageCmd.js');

//console.log(process.argv);
const myArgs = process.argv.slice(2);
//console.log('myArgs: ', myArgs);
const url = myArgs[0];
//console.log(url);
if(undefined === url || url.length < 1 ) {
    throw new Error("Url is empty");
}
let filename = myArgs[1];
if(undefined === filename || filename.length < 1 ) {
    filename = url.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.png';
}

// START
(async () => {
    try {
        let command_obj = [
            {cmd: 'goto', val: url},
            {cmd: 'screenshot_base64'}
        ];
        //console.log(command_obj);
        console.log('<img src="' + await pageCmd(command_obj) + '" alt="' + url + '"> ');
        //print(pageCmd.sc)
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
