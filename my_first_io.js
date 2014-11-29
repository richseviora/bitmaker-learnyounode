/**
 * Created by richardseviora on 14-11-28.
 */
var fs = require('fs');
var file = process.argv[2];
var file_buffer = fs.readFileSync(file);
var file_contents = file_buffer.toString();
var lines = file_contents.split('\n');
console.log(lines.length - 1);