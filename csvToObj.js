module.exports = async function csvToObj(data) {

    // split the contents by new line
    const commands = data.split(/\r?\n/);
    let command_obj = [];
    for (let counter in commands) {
        if (!commands.hasOwnProperty(counter)) continue;
        if (counter < 1) continue;

        let command = commands[counter]
        console.log(counter, command);

        // CLEAN
        const regex_space = / /g;
        const regex_comma = /,/g;
        command = command.replace(regex_space, "");
        let col = command.split(regex_comma);

        // SPLIT
        cmd = col[0];
        val = col[1];

        command_obj.push({'cmd': cmd, 'val': val});
    }

    return command_obj;
}
