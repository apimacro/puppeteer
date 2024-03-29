const puppeteer = require("puppeteer-extra");
const fs = require('fs');

module.exports = async function pageCmd(commands) {
    //let screenshot_base64;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.setViewport({width: 1366, height: 768});
    //await page.goto(url);
    let response;

    for (const command of commands) {
        let cmd = command.cmd;
        let val = command.val;
        //console.log(cmd, val);

        // RUN
        if (cmd === "goto") {
            //await page.setRequestInterception(true);
            response = await page.goto(val);
            const chain = response.request().redirectChain();
            //console.log(chain.length); // 0
            console.log("<p>" + chain.length + "<p>"); // 0
        }
        if (cmd === "goto_wait") {
            response = await page.goto(val, {waitUntil: 'domcontentloaded'});
        }
        if (cmd === "click") {
            await page.click(val);
        }
        if (cmd === "focus") {
            await page.click(val);
        }
        if (cmd === "screenshot") {
            await page.screenshot({path: val});
        }
        if (cmd === "screenshot_pdf") {
            //createPDFStream
            await page.pdf({path: val});
        }
        if (cmd === "screenshot_base64") {
            //const base64 = await page.screenshot({ encoding: "base64" })
            //return await page.screenshot({ encoding: "base64" });
            //console.log('<img src="data:image/png;base64,' + await page.screenshot({ encoding: "base64" }) + '" alt="' + val + '"/> ');



            return await page.screenshot({ encoding: "base64" }).then(function(data){
                let base64Encode = `data:image/png;base64,${data}`;
                //console.log('<p>' + val + '</p>' + '<img src="' + base64Encode + '" alt="' + val + '"/> ');
                //console.log('<p>' + val + '</p>');
                //process.exit();
                browser.close();

                return base64Encode;
            });
        }
        if (cmd === "wait") {
            await page.waitForTimeout(val);
        }
        if (cmd === "write_from_file") {
            const value = fs.readFileSync(val, "utf8");
            await page.keyboard.type(value);
        }
        if (cmd === "write") {
            await page.keyboard.type(val);
        }
        if (cmd === "wait_browser") {
            await page.waitForNavigation();
        }
    }
    browser.close();

}