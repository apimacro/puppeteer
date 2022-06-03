const loadFile = require('./loadFile');
const saveFile = require('./saveFile');

module.exports = async function pageCmd(page, commands) {

    page.setViewport({width: 1366, height: 768});

    let first = 0
    commands.forEach(async (command) => {

        if (first == 0) {
            first = 1
            return;
        }

        // CLEAN
        const regex_space = / /g;
        const regex_comma = /,/g;
        command = command.replace(regex_space, "");
        let col = command.split(regex_comma);

        // SPLIT
        cmd = col[0];
        val = col[1];

        // RUN COMMAND
        // await runCommand(page, cmd, val);

        setTimeout(() => {
            console.log("Delayed for 1 second.");
        }, "1000")




    });
    //await page.waitForTimeout(3000);
    //process.exit(1);


//    commands.forEach(function (name,value){
    //       console.log(name,value)
    //  })

    //await page.goto(url);
    //await page.screenshot({path: filename + '.png'});
}


async function runCommand(page, cmd, val) {

    console.log(cmd, val);

    // RUN
    if (cmd == "goto") {
        await page.goto(val);
    }
    if (cmd == "goto_waitr") {
        await page.goto(val, {waitUntil: 'domcontentloaded'});
    }
    if (cmd == "click") {
        await page.click(val);
    }
    if (cmd == "focus") {
        await page.click(val);
    }
    if (cmd == "screenshot") {
        await page.screenshot({path: val});
    }
    if (cmd == "wait") {
        await page.waitForTimeout(val);
    }
    if (cmd == "write_from_file") {
        const value = require("fs").readFileSync(val, "utf8");
        await page.keyboard.type(value);
    }
    if (cmd == "write") {
        await page.keyboard.type(val);
    }
    if (cmd == "wait_browser") {
        await page.waitForNavigation();
    }
}
