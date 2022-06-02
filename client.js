const puppeteer = require("puppeteer-extra");
puppeteer.use(require("puppeteer-extra-plugin-stealth")());

const fs = require('fs');

const loadFile = require('./loadFile');
const saveFile = require('./saveFile');
const home = require('./home.js');

console.log(process.argv);
const myArgs = process.argv.slice(2);
//console.log('myArgs: ', myArgs);


// FUNCTIONS
async function startBrowser() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    return {browser, page};
}

async function closeBrowser(browser) {
    return browser.close();
}

// START

(async () => {
    const {browser, page} = await startBrowser();

    for (const filepath_csv of myArgs) {
        //console.log(filepath_csv);

        try {
            // read contents of the file
            const data = fs.readFileSync(filepath_csv, 'UTF-8');

            // split the contents by new line
            const commands = data.split(/\r?\n/);

            // print all lines
            home(page, commands);


        } catch (err) {
            console.error(err);
            process.exit(1);
        }

    }
    /*
    myArgs.foreach(function (filepath_csv){
        loadFile(filepath_csv, function (commands){
            //home(page, commands);
            console.log(commands)
        })
    })
*/
   //process.exit(1);

})();