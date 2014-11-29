/**
 * Created by richardseviora on 14-11-28.
 */
var argv = process.argv;
argv.splice(0,2);
var sum = 0;
for (var i = 0; i < argv.length; i++) {
    sum += parseFloat(argv[i]);
}
console.log(sum);
