/**
 * Created by richardseviora on 14-11-28.
 */
var dir_path = process.argv[2];
var fs = require('fs');
var path = require('path');
var extension = '.' + process.argv[3];

function assess_file_name (file_name, index, array) {
    //console.log(path.extname(file_name));
    //console.log(extension);
    if (path.extname(file_name) == extension) {
        console.log(file_name);
    }
}

function parse_file_list (err,list) {
    //console.log(list);
    if (!err) {
        list.forEach(assess_file_name);
    }
}
fs.readdir(dir_path,parse_file_list);