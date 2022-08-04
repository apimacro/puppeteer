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
let command_obj = [
    {cmd: 'goto', val: url},
    {cmd: 'screenshot_base64', val: url}
];
let base64Encode = "";
// START
(async () => {
    try {
        //console.log(command_obj);
        let base64Encode = await pageCmd(command_obj);
        console.log('<p>' + url + '</p>' + '<img src="' + base64Encode + '" alt="' + url + '"/> ');
        process.exit();

    } catch (err) {
        console.error(err);
    }
})();

//process.exit();
