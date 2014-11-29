/**
 * Created by richardseviora on 14-11-28.
 */
var fs = require('fs')
var file = process.argv[2];
fs.readFile(file,count_lines);
function count_lines(err, data) {
    if (!err) {
        var file_contents = data.toString();
        var lines = file_contents.split('\n');
        console.log(lines.length - 1);
    }
}

