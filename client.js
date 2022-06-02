const puppeteer = require("puppeteer-extra");
puppeteer.use(require("puppeteer-extra-plugin-stealth")());

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


    process.exit(1);
})();